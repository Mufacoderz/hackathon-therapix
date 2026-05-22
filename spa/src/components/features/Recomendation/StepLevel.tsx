const LEVELS = [
  { id: "Lembut", label: "Lembut" },
  { id: "Normal", label: "Normal" },
  { id: "Keras", label: "Keras" },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  onNext: () => void;
}

export default function StepLevel({ selected, onSelect, onNext }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-stone-800 mb-1">Level pijatan</h2>
      <p className="text-sm text-stone-500 mb-5">Pilih intensitas pijatan yang kamu nyaman</p>

      <div className="flex flex-col gap-3 mb-6">
        {LEVELS.map((lvl) => (
          <button
            key={lvl.id}
            onClick={() => onSelect(lvl.id)}
            className={`rounded-2xl border p-4 text-left transition-all ${
              selected === lvl.id
                ? "border-stone-800 bg-stone-100"
                : "border-stone-200 hover:border-stone-400"
            }`}
          >
            <p className="text-sm font-medium text-stone-800">{lvl.label}</p>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selected}
        className="w-full py-3 rounded-2xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition disabled:opacity-40"
      >
        Lanjut
      </button>
    </div>
  );
}