interface Props {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
}

export default function StepKeluhan({ value, onChange, onNext }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-stone-800 mb-1">Keluhan</h2>
      <p className="text-sm text-stone-500 mb-5">Ceritakan kondisi tubuhmu</p>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        placeholder="Contoh: punggung sakit akibat kelamaan ngodingg......"
        className="w-full rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700 placeholder:text-stone-400 resize-none min-h-30 focus:outline-none focus:border-stone-400"
      />

      <div className="flex justify-between items-center mt-2 mb-6">
        <p className="text-xs text-stone-400">{value.length}/200</p>
      </div>

      <div className="flex gap-3">

        <button
          onClick={onNext}
          disabled={value.trim().length < 5}
          className="flex-2 py-3 rounded-2xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 disabled:opacity-40"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}