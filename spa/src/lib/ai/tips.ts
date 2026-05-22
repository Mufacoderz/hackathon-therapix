import { askGroq } from "@/lib/ai/groq";
import { TIPS_SYSTEM_PROMPT, buildTipsPrompt } from "@/lib/ai/prompt";
import type { GroqResponse } from "@/types/groq";

function safeParseTips(text: string): string[] | null {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const start = cleaned.indexOf("[");
    const end = cleaned.lastIndexOf("]");

    if (start === -1 || end === -1) return null;

    const jsonString = cleaned.slice(start, end + 1);

    const parsed = JSON.parse(jsonString);

    return Array.isArray(parsed) ? parsed : null;
  } catch (err) {
    console.log("Tips PARSE ERROR RAW:", text);
    console.log(err)
    return null;
  }
}

export async function generateTips(keluhan: string) {
  const res: GroqResponse = await askGroq(
    [
      {
        role: "user",
        content: buildTipsPrompt(keluhan),
      },
    ],
    TIPS_SYSTEM_PROMPT,
    "llama-3.3-70b-versatile"
  );

  const content = res?.choices?.[0]?.message?.content || "";

  const parsed = safeParseTips(content);

  if (!parsed || !Array.isArray(parsed)) {
    console.log("Tips gagal di-parse:", content);

    return {
      success: false,
      message: "Gagal generate tips",
      raw: content,
    };
  }

  return {
    success: true,
    data: parsed,
  };
}