"use client";

import { useState } from "react";
import { TREATMENTS } from "@/data/treatment";
import type { Treatment } from "@/types/treatment";
import TreatmentCard from "./TreatmentCard";
import PricingModal from "./PricingModal";

type Area = "Treatment Favorit" | "Kepala" | "Lengan" | "Upper Body" | "Kaki" | "Seluruh Badan";

const AREAS: Area[] = ["Treatment Favorit", "Kepala", "Lengan", "Upper Body", "Kaki", "Seluruh Badan"];

const FAVORIT_KODE = ["J1", "C1", "D1", "F1", "G1", "R1"];

const AREA_MAP: Record<string, string> = {
  Kepala: "Kepala",
  Lengan: "Tangan",
  "Upper Body": "Upper",
  Kaki: "Kaki",
  "Seluruh Badan": "Full Badan",
};

const TAB_LABEL: Record<Area, string> = {
  "Treatment Favorit": "Treatment Favorit",
  Kepala: "Kepala",
  Lengan: "Lengan",
  "Upper Body": "Upper Body",
  Kaki: "Kaki",
  "Seluruh Badan": "Seluruh Badan",
};

export default function ReservasiManual() {
  const [activeArea, setActiveArea] = useState<Area>("Treatment Favorit");
  const [modalTreatment, setModalTreatment] = useState<Treatment | null>(null);

  const filtered =
    activeArea === "Treatment Favorit"
      ? TREATMENTS.filter((t) => FAVORIT_KODE.includes(t.kode))
      : TREATMENTS.filter((t) => t.area === AREA_MAP[activeArea]);

  return (
    <div className="reservasi-manual mt-10 w-full">

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-2.5 rounded-full bg-[#BD8622]" />
        <h3 className="font-poppins text-[22px] sm:text-[28px] font-extrabold text-main whitespace-nowrap">
          Eksplorasi Layanan Kami
        </h3>
        <div className="flex-1 h-2.5 rounded-full bg-[#BD8622]" />
      </div>

      <div className="bg-second rounded-[15px] px-3 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8">

        <div className="mb-6">

          <div className="grid grid-cols-3 gap-2 sm:hidden">
            {AREAS.map((area) => {
              const isActive = activeArea === area;
              return (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={`
                    rounded-[10px] py-2.5 px-2
                    font-poppins text-[11px] font-bold text-center leading-snug
                    transition-colors
                    ${isActive
                      ? "bg-[#F0DCB4] text-stone-900 shadow-sm"
                      : "bg-second text-stone-600 hover:text-stone-900"
                    }
                  `}
                >
                  {TAB_LABEL[area]}
                  {isActive && (
                    <div className="mt-1.5 mx-auto w-6 h-[2.5px] bg-[#BD8622] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex border-b-2 border-stone-800/20">
            {AREAS.map((area) => {
              const isActive = activeArea === area;
              return (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={`
                    relative flex-1 py-4 px-2
                    font-poppins text-[14px] font-bold text-center leading-snug
                    whitespace-pre-line transition-colors
                    ${isActive
                      ? "text-stone-900 bg-[#F0DCB4] rounded-t-xl"
                      : "text-stone-700 hover:text-stone-900"
                    }
                  `}
                >
                  {TAB_LABEL[area]}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.75 bg-[#BD8622] rounded-t-full" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {filtered.map((treatment) => (
            <TreatmentCard
              key={treatment.kode}
              treatment={treatment}
              onOpen={setModalTreatment}
            />
          ))}
        </div>

      </div>

      {modalTreatment && (
        <PricingModal
          treatment={modalTreatment}
          onClose={() => setModalTreatment(null)}
        />
      )}
    </div>
  );
}