import { buildPrompt, SYSTEM_PROMPT } from "@/lib/ai/prompt";
import { askGroq } from "@/lib/ai/groq";
import type { Treatment } from "@/types/treatment";
import { determineScope } from "./determineScope";

interface RecommendParams {
  areas: string[];
  level: string;
  keluhan: string;
  treatments: Treatment[];
}

interface GroqResponse {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

interface AIResult {
  kode: string;
  reason: string;
}

function safeParseJSON(text: string): AIResult | null {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const match = cleaned.match(/\{[\s\S]*\}/);

    if (!match) return null;

    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

export async function recommendTreatment({
  areas,
  level,
  keluhan,
  treatments,
}: RecommendParams) {
  const scope = determineScope(areas);

  const filtered = treatments.filter(
    (t) =>
      t.area.toLowerCase() === scope.toLowerCase()
  );

  console.log("SCOPE:", scope);
  console.log("FILTERED:", filtered);


  if (!filtered.length) {
    return {
      success: false,
      message: `Tidak ada treatment untuk area ${scope} dengan level ${level}`,
    };
  }

  const finalTreatments = filtered;


  const prompt = buildPrompt({
    areas,
    level,
    keluhan,
    treatments: finalTreatments,
  });


  const res: GroqResponse = await askGroq(
    [{ role: "user", content: prompt }],
    SYSTEM_PROMPT,
  );

  const content = res?.choices?.[0]?.message?.content || "";

  // parsing responsenya
  const parsed = safeParseJSON(content);

  if (!parsed?.kode) {
    return {
      success: false,
      message: "AI gagal menghasilkan rekomendasi valid",
      raw: content,
    };
  }

  // cari data rreatemnt yg di rekomendasikan ai
  const selected = treatments.find((t) => t.kode === parsed.kode);

  if (!selected) {
    return {
      success: false,
      message: "Kode treatment tidak ditemukan",
      raw: parsed,
    };
  }

  return {
    success: true,
    data: {
      treatment: selected,
      reason: parsed.reason,
    },
  };
}