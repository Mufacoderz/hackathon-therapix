"use client";

import Image from "next/image";

import daunkiri from "@/public/images/daun-kiri.webp";
import map from "@/public/images/map.webp";

import TitikLokasiMerah from "@/public/images/titik-lokasi-merah.webp";
import TitikLokasiKuning from "@/public/images/titik-lokasi-kuning.webp";
import TitikLokasiHijau from "@/public/images/titik-lokasi-hijau.webp";
import TitikLokasiBiru from "@/public/images/titik-lokasi-biru.webp";
import TitikLokasiUngu from "@/public/images/titik-lokasi-ungu.webp";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function Lokasi() {
  return (
    <section className="relative bg-[#F4EFE6] py-20 overflow-hidden font-poppins">

      {/* DAUN KIRI */}
      <div className="absolute left-0 top-0 opacity-20">
        <Image
          src={daunkiri}
          alt="Daun"
          width={180}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-8">

          {/* CARD BESAR */}
          <div className="bg-[#EFE7D8] rounded-[28px] shadow-md border border-[#D6C9B5] overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* KIRI */}
              <div className="p-8">

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#8A684A] text-3xl" />

                  <h2 className="text-4xl font-bold text-[#8A684A]">
                    Wilayah Jangkauan
                  </h2>
                </div>

                <div className="mt-8 space-y-7">

                  {/* ITEM */}
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#8A684A] mt-3 shrink-0" />

                    <div>
                      <h3 className="text-2xl font-semibold text-[#8A684A]">
                        Samarinda Kota
                      </h3>

                      <p className="text-[#C2A57D] text-lg mt-1">
                        Pusat kota & sekitarnya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#8A684A] mt-3 shrink-0" />

                    <div>
                      <h3 className="text-2xl font-semibold text-[#8A684A]">
                        Samarinda Ulu
                      </h3>

                      <p className="text-[#C2A57D] text-lg mt-1">
                        Daerah Samarinda Ulu & sekitarnya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#8A684A] mt-3 shrink-0" />

                    <div>
                      <h3 className="text-2xl font-semibold text-[#8A684A]">
                        Sungai Kunjang & Sambutan
                      </h3>

                      <p className="text-[#C2A57D] text-lg mt-1">
                        Daerah Sungai Kunjang & sekitarnya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#8A684A] mt-3 shrink-0" />

                    <div>
                      <h3 className="text-2xl font-semibold text-[#8A684A]">
                        Samarinda Ilir & Seberang
                      </h3>

                      <p className="text-[#C2A57D] text-lg mt-1">
                        Daerah Samarinda Ilir & sekitarnya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#8A684A] mt-3 shrink-0" />

                    <div>
                      <h3 className="text-2xl font-semibold text-[#8A684A]">
                        Palaran
                      </h3>

                      <p className="text-[#C2A57D] text-lg mt-1">
                        Daerah Palaran & sekitarnya
                      </p>
                    </div>
                  </div>

                </div>

                {/* BOTTOM INFO */}
                <div className="mt-10 bg-[#E8D2A7] rounded-2xl p-5">
                  <h4 className="font-bold text-[#8A684A] text-lg">
                    Belum menemukan wilayahmu?
                  </h4>

                  <p className="text-[#8A684A] mt-2 text-sm leading-relaxed">
                    Tim kami terus melakukan ekspansi untuk menjangkau
                    lebih banyak area segera.
                  </p>
                </div>
              </div>

              {/* MAP */}
              <div className="relative min-h-[600px] bg-[#E8DFCF]">

                <Image
                  src={map}
                  alt="Map Samarinda"
                  fill
                  className="object-contain p-6"
                />

                {/* TITIK MERAH */}
                <div className="absolute top-[18%] left-[38%]">
                  <Image
                    src={TitikLokasiMerah}
                    alt="Lokasi"
                    width={40}
                    height={40}
                  />
                </div>

                {/* TITIK BIRU */}
                <div className="absolute top-[52%] left-[30%]">
                  <Image
                    src={TitikLokasiBiru}
                    alt="Lokasi"
                    width={40}
                    height={40}
                  />
                </div>

                {/* TITIK UNGU */}
                <div className="absolute top-[40%] left-[47%]">
                  <Image
                    src={TitikLokasiUngu}
                    alt="Lokasi"
                    width={40}
                    height={40}
                  />
                </div>

                {/* TITIK KUNING */}
                <div className="absolute top-[58%] left-[58%]">
                  <Image
                    src={TitikLokasiKuning}
                    alt="Lokasi"
                    width={40}
                    height={40}
                  />
                </div>

                {/* TITIK HIJAU */}
                <div className="absolute bottom-[18%] left-[45%]">
                  <Image
                    src={TitikLokasiHijau}
                    alt="Lokasi"
                    width={40}
                    height={40}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* CARD KANAN */}
          <div className="bg-[#EFE7D8] rounded-[28px] shadow-md border border-[#D6C9B5] p-10 flex items-center">

            <div>
              <h2 className="text-5xl leading-tight font-bold text-[#7A562B]">
                Menghadirkan Kenyamanan
                di Seluruh Sudut Kota.
              </h2>

              <p className="mt-10 text-[#8F7154] text-2xl leading-relaxed">
                de HOME SPA saat ini fokus melayani seluruh wilayah
                Kota Samarinda dengan terapis profesional langsung
                ke rumah.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}