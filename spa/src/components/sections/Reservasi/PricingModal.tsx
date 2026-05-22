"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Treatment } from "@/types/treatment";

type Durasi = 30 | 60 | 90 | 120;


export default function PricingModal({
  treatment,
  onClose,
}: {
  treatment: Treatment;
  onClose: () => void;
}) {
  const router = useRouter();
  const durations: Durasi[] = [30, 60, 90, 120];
  const [selected, setSelected] = useState<Durasi>(60);
  const harga = treatment.harga[selected];

  function handleBook() {
    const params = new URLSearchParams({
      treatment: treatment.nama,
      level: treatment.level,
      durasi: String(selected),
      harga: String(harga),
      keluhan: "",
    });
    router.push(`/form?${params.toString()}`);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-sm rounded-t-3xl sm:rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mb-4 pr-8">
          <p className="font-poppins text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-1">
            {treatment.area}
          </p>
          <h3 className="font-poppins text-[18px] font-bold text-stone-800 leading-snug">
            {treatment.nama}
          </h3>
          <span className="mt-1.5 inline-block rounded-full px-3 py-0.5 font-poppins text-[11px] font-semibold bg-[#F5E6C8] text-[#B9892A]">
            {treatment.level}
          </span>
          <p className="mt-2.5 font-poppins text-[13px] text-stone-500 leading-relaxed">
            {treatment.desc}
          </p>
        </div>

        <div className="h-px bg-stone-100 mb-4" />

        <p className="font-poppins text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-3">
          Pilih Durasi
        </p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setSelected(d)}
              className={`font-poppins rounded-xl py-2.5 text-[13px] font-semibold transition-all border-2 ${
                selected === d
                  ? "bg-[#BD8622] border-[#BD8622] text-white"
                  : "border-stone-200 text-stone-600 bg-white hover:border-[#BD8622] hover:text-[#BD8622]"
              }`}
            >
              {d} mnt
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-[#fdf6e9] border border-[#f0d9a0] px-4 py-3 flex items-center justify-between mb-5">
          <span className="font-poppins text-[13px] text-stone-500 font-medium">Total Harga</span>
          <span className="font-poppins text-[20px] font-bold text-[#BD8622]">
            Rp {harga.toLocaleString("id-ID")}
          </span>
        </div>

        <button
          onClick={handleBook}
          className="w-full rounded-full bg-linear-to-r from-[#E3B45E] to-[#BD8622] py-3.5 font-poppins text-[14px] font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-[0.98]"
        >
          Booking Sekarang →
        </button>
      </div>
    </div>
  );
}