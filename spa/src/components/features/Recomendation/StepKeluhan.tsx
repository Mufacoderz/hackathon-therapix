import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  value: string;
  onChange: (val: string) => void;
    onSubmit: () => void;
  loading: boolean;


}

export default function StepKeluhan({ value, onChange,  onSubmit, loading,
   }: Props) {
  
  return (
    <div className="font-poppins">
      <div className="px-4">
       <h2 className="text-md text-left font-semibold text-[#8B6B52] -mt-3 mb-1">
        Ceritakan Keluhanmu
        </h2>
        <p className="text-xs text-left font-medium text-[#C8A96E] mb-2">
          Jelaskan Kondisi Tubuh Agar AI bisa memberikan rekomendasi yang tepat
        </p>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        placeholder="Contoh: punggung sakit akibat kelamaan ngodingg......"
        className="w-full rounded-2xl border border-[#F5EFE6] bg-stone-50 p-4 text-sm text-stone-700 placeholder:text-stone-400 resize-none min-h-30 focus:outline-none focus:border-[#F5EFE6] focus:border-4"
      />

      <div className="px-2 w-full">
        <p className="text-[#8B6B52] text-sm">Pilihan cepat :</p>
        <div className="flex flex-col">
      <button
        onClick={() =>
    onChange("Punggung dan bahu terasa tegang, habis duduk kerja seharian.")
  }
        className="flex cursor-pointer justify-center items-center bg-[#FDF5E6] gap-2 w-full mt-4 py-1 rounded-4xl border-2 border-[#C8A96E] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40 px-2"
        >
          <p>Punggung dan bahu terasa tegang, habis duduk kerja seharian.</p>
      </button>
      <button
        onClick={() =>
    onChange("Badan capek, pegal semua, rasanya butuh relaksasi dan pijat")
  }
        className="flex cursor-pointer justify-center items-center bg-[#FDF5E6] gap-2 w-full mt-4 py-1 rounded-4xl border-2 border-[#C8A96E] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40 px-2"
        >
          <p>Badan capek, pegal semua, rasanya butuh relaksasi dan pijat</p>
      </button>
      <button
        onClick={() =>
    onChange("Leher dan pinggang terasa kaku karena terlalu lama kerja di depan laptop.")
  }
        className="hidden md:flex cursor-pointer justify-center items-center bg-[#FDF5E6] gap-2 w-full mt-4 py-1 rounded-4xl border-2 border-[#C8A96E] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40 px-2"
        >
          <p>Leher dan pinggang terasa kaku karena terlalu lama kerja di depan laptop.</p>
      </button>
        </div>
      </div>

  


    {/* footer step*/}
<section className="flex items-center justify-between mt-8 md:mt-4">
      <button
        // onClick={onPrev}
        className="flex justify-center items-center gap-2 mt-6 w-28 md:w-32 py-2 rounded-4xl border-2 border-[#8B6B52] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40"
        >
          <span><FaArrowLeft /></span>
          <span>Kembali</span>
      </button>
      <button
        onClick={onSubmit}
        disabled={value.trim().length < 5}
        className="flex justify-center items-center gap-2 w-42 md:w-52 mt-6 py-2 rounded-4xl border-2 border-[#8B6B52] text-[#8B6B52] text-sm font-medium transition disabled:opacity-40"
        >
          <span>Kirim</span>
          <span><FaArrowRight /></span>
      </button>
        </section>
      </div>
  );
}