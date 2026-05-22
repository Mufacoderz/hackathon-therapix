import type { Result, Treatment } from "@/types/flow";
import { formatPrice } from "@/utils/formatRupiah";

interface Props {
  result: Result;
  keluhan: string;
}

const handleBooking = (treatment: Treatment, durasi: number, keluhan: string) => {
  const params = new URLSearchParams({
    treatment: treatment.nama,
    level: treatment.level,
    durasi: String(durasi),
    harga: String(treatment.harga_durasi),
    keluhan,
  });

  window.location.href = `/form?${params.toString()}`;
};

export default function StepResult({ result, keluhan }: Props) {
  return (
    <div className="w-full pb-12">
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-400">
        Rekomendasi AI
      </p>

      <div className="mb-5 rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm">
        <div className="relative mb-5 overflow-hidden rounded-3xl bg-stone-900 p-5 text-white">
          <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-white/5" />

          <p className="relative z-10 mb-3 text-[11px] uppercase tracking-[0.2em] text-stone-400">
            Kenapa treatment ini cocok?
          </p>

          <p className="relative z-10 text-[15px] leading-7 text-stone-100">
            {result.reason}
          </p>
        </div>

        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs text-stone-400">
              {result.treatment.area} · {result.treatment.level}
            </p>

            <h2 className="text-xl font-semibold leading-snug text-stone-800">
              {result.treatment.nama}
            </h2>
          </div>

          <div className="whitespace-nowrap rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
            {result.durasi} menit
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="mb-1 text-xs text-stone-400">Estimasi Harga</p>

            <p className="text-lg font-semibold text-stone-900">
              {formatPrice(result.treatment.harga_durasi)}
            </p>
          </div>

          <div className="text-right">
            <p className="mb-1 text-xs text-stone-400">Level Tekanan</p>

            <p className="text-sm font-medium capitalize text-stone-700">
              {result.treatment.level}
            </p>
          </div>
        </div>

        <button
          onClick={() => handleBooking(result.treatment, result.durasi, keluhan)}
          className="w-full rounded-2xl bg-stone-900 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800 active:scale-[0.98]"
        >
          Booking Treatment Ini
        </button>
      </div>

      {result.related?.length > 0 && (
        <div className="mb-5">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-400">
            Treatment Terkait
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {result.related.map((t) => (
              <div
                key={t.kode}
                className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-stone-400"
              >
                <div>
                  <p className="mb-1 text-xs text-stone-400">{t.area}</p>
                  <p className="text-sm font-medium leading-snug text-stone-800">
                    {t.nama}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {t.level} · {result.durasi} menit
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  <p className="text-sm font-semibold text-stone-800">
                    {formatPrice(t.harga_durasi)}
                  </p>

                  <button
                    onClick={() => handleBooking(t, result.durasi, keluhan)}
                    className="w-full rounded-xl bg-stone-800 px-4 py-2 text-xs font-medium text-white transition hover:bg-stone-700"
                  >
                    Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="w-full rounded-2xl border border-stone-200 bg-white py-3 text-sm text-stone-600 hover:bg-stone-50"
      >
        Minta rekomendasi lain
      </button>
    </div>
  );
}