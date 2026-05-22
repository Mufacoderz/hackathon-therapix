import type { GroqResponse, GroqMessage } from "@/types/groq";

const MODEL_FALLBACK: Record<string, string> = {
  "openai/gpt-oss-120b": "llama-3.1-8b-instant",
  "llama-3.3-70b-versatile": "llama-3.1-8b-instant",
  "llama-3.1-8b-instant": "",
};

const MODEL_MAX_TOKENS: Record<string, number> = {
  "openai/gpt-oss-120b": 800,
  "llama-3.3-70b-versatile": 500,
  "llama-3.1-8b-instant": 200,
};



export async function askGroq(
  messages: GroqMessage[],
  system?: string,
  model: string = "openai/gpt-oss-120b"
): Promise<GroqResponse> {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          temperature: 0.2,
          max_tokens: MODEL_MAX_TOKENS[model] ?? 200,
          messages: [
            ...(system ? [{ role: "system", content: system }] : []),
            ...messages,
          ],
        }),
      }
    );

    if (!response.ok) {
      const fallback = MODEL_FALLBACK[model];
      if (fallback) {
        console.warn(`Model ${model} gagal (${response.status}), fallback ke ${fallback}`);
        return askGroq(messages, system, fallback);
      }
      throw new Error(`Semua model gagal, status: ${response.status}`);
    }

    return response.json() as Promise<GroqResponse>;

  } catch (err) {
    const fallback = MODEL_FALLBACK[model];
    if (fallback) {
      console.warn(`Model ${model} error, fallback ke ${fallback}`);
      return askGroq(messages, system, fallback);
    }
    throw err;
  }
}