import type { Result, Treatment } from "@/types/flow";
import { formatPrice } from "@/utils/formatRupiah";

interface Props {
  result: Result;
  keluhan: string
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
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">
        Rekomendasi AI
      </p>

      <div className="rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm mb-5">


        <div className="rounded-3xl bg-stone-900 text-white p-5 mb-5 relative overflow-hidden">

          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/5 rounded-full" />

          <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-3 relative z-10">
            Kenapa treatment ini cocok?
          </p>

          <p className="text-[15px] leading-7 text-stone-100 relative z-10">
            {result.reason}
          </p>
        </div>

        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-xs text-stone-400 mb-1">
              {result.treatment.area} · {result.treatment.level}
            </p>

            <h2 className="text-xl font-semibold text-stone-800 leading-snug">
              {result.treatment.nama}
            </h2>
          </div>

          <div className="px-3 py-1 rounded-full bg-stone-100 text-xs text-stone-600 whitespace-nowrap">
            {result.durasi} menit
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4 mb-5">
          <div>
            <p className="text-xs text-stone-400 mb-1">
              Estimasi Harga
            </p>

            <p className="text-lg font-semibold text-stone-900">
              {formatPrice(result.treatment.harga_durasi)}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-stone-400 mb-1">
              Level Tekanan
            </p>

            <p className="text-sm font-medium text-stone-700 capitalize">
              {result.treatment.level}
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            handleBooking(
              result.treatment,
              result.durasi,
              keluhan
            )
          }
          className="w-full py-3 rounded-2xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all active:scale-[0.98]"
        >
          Booking Treatment Ini
        </button>
      </div>

      {/* Treatment Terkait */}
      {result.related?.length > 0 && (
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
            Treatment Terkait
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {result.related.map((t) => (
              <div
                key={t.kode}
                className="border border-stone-200 rounded-2xl p-4 hover:border-stone-400 transition flex flex-col gap-3"
              >
                <div>
                  <p className="text-xs text-stone-400 mb-1">{t.area}</p>
                  <p className="text-sm font-medium text-stone-800 leading-snug">{t.nama}</p>
                  <p className="text-xs text-stone-500 mt-1">
                    {t.level} · {result.durasi} menit
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  <p className="text-sm font-semibold text-stone-800">
                    {formatPrice(t.harga_durasi)}
                  </p>
                  <button
                    onClick={() => handleBooking(t, result.durasi, keluhan)}
                    className="w-full py-2 px-4 bg-stone-800 text-white text-xs font-medium rounded-xl hover:bg-stone-700 transition">
                    Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => { window.location.href = "/"; }}
        className="w-full py-3 rounded-2xl border border-stone-200 text-sm text-stone-600 hover:bg-stone-50"
      >
        Minta rekomendasi lain
      </button>
    </div>
  );
}