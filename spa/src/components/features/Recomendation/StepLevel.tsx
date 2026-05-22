import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuLeaf, LuWind } from "react-icons/lu";
import { GiFist } from "react-icons/gi";

const LEVELS = [
  { id: "Lembut", label: "Lembut", desc: 'Relaksasi Ringan', icon: <LuLeaf className="text-[35px] md:text-[60px]"  />  },
  { id: "Normal", label: "Normal", desc: 'Seimbang & Nyaman', icon: <LuWind className="text-[35px] md:text-[60px]" />    },
  { id: "Keras", label: "Keras", desc: 'Kuat & Intens', icon: <GiFist className="text-[35px] md:text-[60px]"  />   },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  onNext: () => void;
}

export default function StepLevel({ selected, onSelect, onNext }: Props) {
  return (
    <div className="font-poppins">
      <h2 className="text-lg text-center font-semibold font-poppins text-[#8B6B52] mb-1">Seberapa Kuat Pijatan yang Kamu Inginkan</h2>
      <p className="text-sm text-center text-[#C8A96E] mb-5">Pilih Level Pijatan</p>

      <div className="flex mt-12 md:mt-8 gap-4 mb-6">
        {LEVELS.map((lvl) => (
          <button
            key={lvl.id}
            onClick={() => onSelect(lvl.id)}
            className={`rounded-4xl border border-[#8B6B52] text-center transition-all shadow-2xl w-58 h-38 md:h-64 ${
              selected === lvl.id
                ? "border-4 border-[#8B6B52] bg-stone-100"
                : "border border-8B6B52 hover:border-[#8B6B52]"
            }`}
          >
            <span className="text-[#8B6B52] flex justify-center items-center">{lvl.icon}</span>
            <p className="text-sm md:text-md font-bold font-poppins text-[#8B6B52]">{lvl.label}</p>
            <p className="text-[8px] md:text-sm font-light text-[#8B6B52]">{lvl.desc}</p>
          </button>
        ))}
      </div>

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