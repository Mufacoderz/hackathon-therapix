"use client";

import Image from "next/image";
import abu from "@/public/images/anatomy/default.webp";
import { getSelectedImage } from "@/utils/getSelectedImage";
import { FaArrowLeft, FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


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
    <div className="mx-auto font-poppins">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold text-[#8B6B52] mb-1">
          Bagian Tubuh Mana yang Terasa Pegal
        </h2>
        <p className="text-sm text-[#C8A96E]">
          Kamu bisa pilih lebih dari satu area
        </p>
      </div>

      <div className="flex justify-center mb-0">
        <div className="mt-16 mr-18 md:mr-4">
  
{/* MOBILE */}
<Dialog>
  <DialogTrigger asChild>
    <button className="flex md:hidden items-center justify-center w-12 h-12 rounded-full border border-[#C1C1C1] bg-[#FDF5E6] text-[#8B6B52]">
      <FaRegQuestionCircle size={20} />
    </button>
  </DialogTrigger>

  <DialogContent  className="rounded-3xl w-70 max-w-[90vw] min-h-50">
    <DialogHeader>
      <DialogTitle className="flex items-center gap-2 text-[#8B6B52]">
        <FaRegQuestionCircle />
        Tips
      </DialogTitle>
    </DialogHeader>

    <p className="text-sm text-[#8B6B52]">
      Pilih satu atau lebih area yang terasa pegal agar kami bisa memberikan rekomendasi yang lebih tepat
    </p>
  </DialogContent>
</Dialog>

  {/* DESKTOP */}
  <div className="hidden md:block border border-[#C1C1C1] rounded-4xl w-42 h-42">
    <div className="bg-[#FDF5E6] rounded-4xl w-full h-full p-3">
      <div className="flex items-center gap-2 font-bold text-[#8B6B52] mb-2">
        <FaRegQuestionCircle />
        <p>Tips</p>
      </div>

      <p className="font-extralight text-xs text-[#8B6B52]">
        Pilih satu atau lebih area yang terasa pegal agar kami bisa memberikan rekomendasi yang lebih tepat
      </p>
    </div>
  </div>
</div>

          <div 
            className="cursor-pointer inline-block mr-0"
            onClick={(e) => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement;
              if (!img) return;

              const rect = img.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const clickY = e.clientY - rect.top;

              const relX = clickX / rect.width;
              const relY = clickY / rect.height;

              let areaId = null;
              
              if (relY < 0.2) {
                areaId = 1;
              } else if (relY >= 0.2 && relY < 0.35) {
                if (relX < 0.15) {
                  areaId = 2;
                } else if (relX > 0.85) {
                  areaId = 2;
                } else {
                  areaId = 3;
                }
              } else if (relY >= 0.35 && relY < 0.54) {
                if (relX < 0.1) {
                  areaId = 2;
                } else if (relX > 0.9) {
                  areaId = 2;
                } else {
                  areaId = 3;
                }
              } else {
                areaId = 4;
              }

              if (areaId) toggle(areaId);
            }}
          >
            <Image
              src={getSelectedImage(selected, abu)}
              alt="Area tubuh"
              loading="lazy"
              className="h-66 md:h-74 w-auto object-contain"
            />
          </div>
      </div>

<section className="flex items-center justify-between">
      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="flex justify-center items-center gap-2 mt-6 w-28 md:w-32 py-2 rounded-4xl border-2 border-[#8B6B52] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40"
        >
          <span><FaArrowLeft /></span>
          <span>Kembali</span>
      </button>
      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="flex justify-center items-center gap-2 w-42 md:w-52 mt-6 py-2 rounded-4xl border-2 border-[#8B6B52] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40"
        >
          <span>Lanjutkan</span>
          <span><FaArrowRight /></span>
      </button>
        </section>
    </div>
  );
}