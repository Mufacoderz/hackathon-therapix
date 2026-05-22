import ButtonReservasi from "@/components/ui/ButtonReservasi";
import reservasiImage from "@/public/images/reservasiImg.png";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ReservasiAI() {
  return (
    <section className="w-full py-10">
      <div className="reservasi-ai bg-[#FDF5E6] border border-[#D9D9D9] rounded-[15px] px-8 py-10 md:px-12 md:py-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-md">

        <div className="kiri w-full lg:w-[55%]">

          <div className="inline-flex items-center gap-3 border-2 border-[#E0A11B] bg-[#FFF1D6] rounded-[15px] px-5 py-3 mb-8">
            <Sparkles className="text-[#F4A300] w-7 h-7 fill-[#F4A300]" />
            <span className="font-poppins font-semibold text-[18px] md:text-[20px] text-[#B58D6A]">
              Rekomendasi AI
            </span>
          </div>

          <h2 className="font-poppins font-bold text-[#8B6B52] text-[24px] md:text-[40px] leading-tight uppercase mb-4">
            Bingung Pilih Treatment ?
          </h2>

          <p className="font-poppins text-[#9B765B] text-[20px] md:text-[28px] leading-relaxed max-w-175 mb-10">
            Ceritakan apa yang kamu rasakan, dan kami akan
            pilihkan layanan yang paling cocok buat kamu.
          </p>

          <ButtonReservasi>
            Konsultasi Sekarang
          </ButtonReservasi>
        </div>

        <div className="kanan w-full lg:w-[45%] flex justify-center">
          <Image
            src={reservasiImage}
            width={430}
            height={400}
            alt="gambar reservasi ai"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}