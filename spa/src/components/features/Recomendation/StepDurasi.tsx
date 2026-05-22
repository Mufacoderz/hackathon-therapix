import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const DURATIONS = [
  { id: "30", label: "30 menit", desc: 'Durasi Singkat', icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" /> },
  { id: "60", label: "60 menit", desc: 'Durasi Ideal', icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />  },
  { id: "90", label: "90 menit", desc: 'Lebih Lama', icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />  },
  { id: "120", label: "120 menit", desc: 'Sesi Maksimal', icon: <MdOutlineTimer className="text-[35px] md:text-[55px]" />  },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  loading: boolean;
  error: string;
  onNext: () => void;


}

export default function StepDurasi({
  selected,
  onSelect,
onNext,
  error,
  loading,
}: Props) {
  return (
    <div className="font-poppins">
       <h2 className="text-lg text-center font-semibold text-[#8B6B52] mb-1">
          Durasi Pijatan yang kamu inginkan
        </h2>
        <p className="text-sm text-center text-[#C8A96E]">
          Pilih Durasi Pijatan yang paling sesuai
        </p>

      <div className="flex mb-6 mt-12 md:mt-8 gap-4">
        {DURATIONS.map((dur) => (
          <button
            key={dur.id}
            onClick={() => onSelect(dur.id)}
            className={`rounded-4xl border border-[#8B6B52] text-center transition-all shadow-2xl w-58 h-38 md:h-64 ${
              selected === dur.id
                ? "border-4 border-[#8B6B52] bg-stone-100"
                : "border border-8B6B52 hover:border-[#8B6B52]"
            }`}
          >
            <span className="text-[#8B6B52] flex justify-center items-center mb-4">{dur.icon}</span>
            <p className="text-[10px] md:text-sm font-bold font-poppins text-[#8B6B52]">{dur.label}</p>
            <p className="text-[6px] md:text-xs font-light text-[#C8A96E]">{dur.desc}</p>
          </button>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center mb-4">{error}</p>
      )}


      {/* footer step*/}
<section className="flex items-center justify-between mt-22 md:mt-0">
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