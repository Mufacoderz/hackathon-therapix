"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepBadan from "@/components/features/Recomendation/StepBadan";
import StepLevel from "@/components/features/Recomendation/StepLevel";
import StepKeluhan from "@/components/features/Recomendation/StepKeluhan";
import StepDurasi from "@/components/features/Recomendation/StepDurasi";
import StepResult from "@/components/features/Recomendation/StepResult";
import type { Result } from "@/types/flow";

const idToLabel: Record<number, string> = {
  1: "Kepala",
  2: "Tangan",
  3: "Punggung",
  4: "Kaki",
};

export default function FlowShell() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [selectedBadan, setSelectedBadan] = useState<number[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [selectedDur, setSelectedDur] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const areas = selectedBadan.map((id) => idToLabel[id]);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/recomendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          areas,
          level: selectedLevel,
          keluhan,
          durasi: selectedDur,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
        setStep(4);
      } else {
        setError(data.message || "Terjadi kesalahan");
      }
    } catch {
      setError("Gagal menghubungi server");
    } finally {
      setLoading(false);
    }
  };

  const STEPS = ["Area Tubuh", "Level", "Durasi", "Keluhan"];

  return (
    <div className="min-h-screen bg-[#F5EFE6] flex flex-col items-center px-4 py-8">

      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-[#5C3D2E]">Rekomendasi AI</h1>
        {step < 4 && (
          <p className="text-sm text-[#9C7B6B] mt-1">
            {step === 0 && "AI akan menyesuaikan rekomendasi berdasarkan area yang dipilih"}
            {step === 1 && "Pilih level pijatan"}
            {step === 2 && "Berapa lama sesi yang kamu inginkan"}
            {step === 3 && "Ceritakan keluhanmu"}
          </p>
        )}
      </div>

      {step < 4 && (
        <div className="flex items-center gap-0 mb-8">
          {STEPS.map((label, i) => {
            const isActive = i === step;
            const isDone = i < step;
            return (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                      ${isActive || isDone
                        ? "bg-[#8B6B52] text-white"
                        : "bg-white border border-[#C9A882] text-[#C9A882]"
                      }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-[10px] mt-1 w-16 text-center ${
                      isActive || isDone ? "text-[#8B6B52] font-medium" : "text-[#C9A882]"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {i < STEPS.length - 1 && (
                  <div
                    className={`w-12 h-px mb-4 transition-all ${
                      i < step ? "bg-[#8B6B52]" : "bg-[#D9C5B5]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6">
          {step === 0 && (
            <StepBadan
              selected={selectedBadan}
              onSelect={setSelectedBadan}
              onNext={handleNext}
            />
          )}
          {step === 1 && (
            <StepLevel
              selected={selectedLevel}
              onSelect={setSelectedLevel}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <StepKeluhan
              value={keluhan}
              onChange={setKeluhan}
              onNext={handleNext}
            />
            
            
          )}
          {step === 3 && (
            <StepDurasi
              selected={selectedDur}
              onSelect={setSelectedDur}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          )}
          {step === 4 && result && (
            <StepResult result={result} keluhan={keluhan} />
          )}
        </div>

        {step > 0 && step < 4 && (
          <div className="px-6 pb-5 flex justify-between">
            <button
              onClick={handleBack}
              className="text-sm text-[#9C7B6B] hover:text-[#5C3D2E] transition flex items-center gap-1"
            >
              ← Kembali
            </button>
          </div>
        )}
        {step === 0 && (
          <div className="px-6 pb-5">
            <button
              onClick={() => router.push("/")}
              className="text-sm text-[#9C7B6B] hover:text-[#5C3D2E] transition flex items-center gap-1"
            >
              ← Kembali ke beranda
            </button>
          </div>
        )}
      </div>

    </div>
  );
}