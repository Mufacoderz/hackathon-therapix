"use client";

import Image from "next/image";
import abu from "@/public/images/anatomy/default.webp";
import { getSelectedImage } from "@/utils/getSelectedImage";



const areas = [
  { id: 1, name: "kepala", label: "Kepala", desc: "Kepala & Leher" },
  { id: 2, name: "lengan", label: "Tangan", desc: "Tangan & Lengan" },
  { id: 3, name: "punggung", label: "Punggung", desc: "Punggung & Bahu" },
  { id: 4, name: "kaki", label: "Kaki", desc: "Kaki & Betis" },
];

interface Props {
  selected: number[];
  onSelect: (ids: number[]) => void;
  onNext: () => void;
}

export default function StepBadan({ selected, onSelect, onNext }: Props) {
  const toggle = (id: number) => {
    onSelect(
      selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]
    );
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-stone-800 mb-1">
        Pilih area tubuh
      </h2>
      <p className="text-sm text-stone-500 mb-5">
        Kamu bisa pilih lebih dari satu area
      </p>

      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-2 w-36 shrink-0">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => toggle(area.id)}
              type="button"
              className={`rounded-lg border px-2.5 py-1.5 text-left transition-all ${
                selected.includes(area.id)
                  ? "border-[#8B6B52] bg-[#F5EDE5]"
                  : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <p className="text-xs font-medium text-stone-800">{area.label}</p>
              <p className="text-[10px] text-stone-400">{area.desc}</p>
            </button>
          ))}
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src={getSelectedImage(selected, abu)}
            alt="Area tubuh"
            loading="lazy"
            className="h-56 w-auto object-contain"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="mt-6 w-full py-3 rounded-2xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition disabled:opacity-40"
      >
        Lanjut
      </button>
    </div>
  );
}