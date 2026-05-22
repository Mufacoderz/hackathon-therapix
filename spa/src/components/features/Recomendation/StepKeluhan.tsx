import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  onPrev: () => void;
  loading: boolean;
  error: string;
}

export default function StepKeluhan({
  value,
  onChange,
  onSubmit,
  onPrev,
  loading,
  error,
}: Props) {
  return (
    <div className="font-poppins">
      <div className="px-4">
        <h2 className="-mt-3 mb-1 text-left text-md font-semibold text-[#8B6B52]">
          Ceritakan Keluhanmu
        </h2>
        <p className="mb-2 text-left text-xs font-medium text-[#C8A96E]">
          Jelaskan Kondisi Tubuh Agar AI bisa memberikan rekomendasi yang tepat
        </p>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        placeholder="Contoh: punggung sakit akibat kelamaan ngodingg......"
        className="min-h-30 w-full resize-none rounded-2xl border border-[#F5EFE6] bg-stone-50 p-4 text-sm text-stone-700 placeholder:text-stone-400 focus:border-4 focus:border-[#F5EFE6] focus:outline-none"
      />

      <div className="w-full px-2">
        <p className="text-sm text-[#8B6B52]">Pilihan cepat :</p>

        <div className="flex flex-col">
          <button
            onClick={() =>
              onChange("Punggung dan bahu terasa tegang, habis duduk kerja seharian.")
            }
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-[#C8A96E] bg-[#FDF5E6] px-2 py-1 text-sm font-medium text-[#8B6B52] transition"
          >
            <p>Punggung dan bahu terasa tegang, habis duduk kerja seharian.</p>
          </button>

          <button
            onClick={() =>
              onChange("Badan capek, pegal semua, rasanya butuh relaksasi dan pijat")
            }
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-[#C8A96E] bg-[#FDF5E6] px-2 py-1 text-sm font-medium text-[#8B6B52] transition"
          >
            <p>Badan capek, pegal semua, rasanya butuh relaksasi dan pijat</p>
          </button>

          <button
            onClick={() =>
              onChange("Leher dan pinggang terasa kaku karena terlalu lama kerja di depan laptop.")
            }
            className="mt-4 hidden w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-[#C8A96E] bg-[#FDF5E6] px-2 py-1 text-sm font-medium text-[#8B6B52] transition md:flex"
          >
            <p>Leher dan pinggang terasa kaku karena terlalu lama kerja di depan laptop.</p>
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-4 text-center text-sm text-red-500">{error}</p>
      )}

      <section className="mt-8 flex items-center justify-between md:mt-4">
        <button
          onClick={onPrev}
          disabled={loading}
          className="mt-6 flex w-28 items-center justify-center gap-2 rounded-4xl border-2 border-[#8B6B52] py-2 text-sm font-medium text-[#8B6B52] transition disabled:opacity-40 md:w-32"
        >
          <FaArrowLeft />
          <span>Kembali</span>
        </button>

        <button
          onClick={onSubmit}
          disabled={value.trim().length < 5 || loading}
          className="mt-6 flex w-38 items-center justify-center gap-2 rounded-4xl border-2 border-[#8B6B52] py-2 text-sm font-medium text-[#8B6B52] transition disabled:opacity-40 md:w-52"
        >
          <span>{loading ? "Menganalisis..." : "Kirim"}</span>
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
}