const DURATIONS = [
  { id: "30", label: "30 menit" },
  { id: "60", label: "60 menit" },
  { id: "90", label: "90 menit" },
  { id: "120", label: "120 menit" },
];

interface Props {
  selected: string;
  onSelect: (val: string) => void;
  onSubmit: () => void;
  loading: boolean;
  error: string;
}

export default function StepDurasi({
  selected,
  onSelect,
  onSubmit,
  loading,
  error,
}: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-stone-800 mb-1">Durasi treatment</h2>
      <p className="text-sm text-stone-500 mb-5">Durasi akan otomatis dipakai saat booking</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {DURATIONS.map((dur) => (
          <button
            key={dur.id}
            onClick={() => onSelect(dur.id)}
            className={`rounded-2xl border p-4 transition-all ${
              selected === dur.id
                ? "border-stone-800 bg-stone-100"
                : "border-stone-200 hover:border-stone-400"
            }`}
          >
            <p className="text-sm font-medium text-stone-800">{dur.label}</p>
          </button>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center mb-4">{error}</p>
      )}

      
      <button
        onClick={onSubmit}
        disabled={!selected || loading}
        className="w-full py-3 rounded-2xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 disabled:opacity-40 mb-3"
      >
        {loading ? "Menganalisis..." : "Minta rekomendasi AI"}
      </button>


    </div>
  );
}