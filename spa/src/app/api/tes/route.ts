import { NextResponse } from "next/server";
import { recommendTreatment } from "@/lib/ai/recomendation";
import { TREATMENTS } from "@/data/treatment";

export async function GET() {
  try {
    const result = await recommendTreatment({
      areas: ["Pundak", "Punggung"],
      level: "Sedang",
      keluhan:
        "Pundak kaku, punggung pegal, sering duduk lama depan laptop, badan terasa capek.",
      treatments: TREATMENTS,
    });

    return NextResponse.json({
      success: true,
      testInput: {
        areas: ["Pundak", "Punggung"],
        level: "Sedang",
        keluhan:
          "Pundak kaku, punggung pegal, sering duduk lama depan laptop, badan terasa capek.",
      },
      aiResult: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}