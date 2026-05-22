"use client";

import { useState } from "react";
import { buildMessageToAdmin } from "@/lib/message/toAdmin";
import { buildMessageToPelanggan } from "@/lib/message/toPelanggan";

interface Props {
  nama: string;
  phone: string;
  gender: string;
  lokasi: string;
  detailAlamat: string;
  payment: string;
  catatan: string;
  treatment: string;
  level: string;
  durasi: string;
  harga: string;
  tanggal: string;
  jam: string;
  keluhan: string;
}


//buat klo user masukkan 08 auto berubah datanya jdi 628 
export function normalizeTo62(phone: string) {
  let cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  }

  if (!cleaned.startsWith("62")) {
    cleaned = "62" + cleaned;
  }

  return cleaned;
}

export default function SubmitButton({
  nama,
  phone,
  gender,
  lokasi,
  detailAlamat,
  payment,
  catatan,
  treatment,
  level,
  durasi,
  harga,
  tanggal,
  jam,
  keluhan,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (
      !nama.trim() ||
      !phone.trim() ||
      !lokasi.trim() ||
      !detailAlamat.trim() ||
      !tanggal ||
      !jam
    ) {
      alert("Mohon lengkapi semua data yang diperlukan.");
      return;
    }

    setLoading(true);

    try {
      //wa ke admin
      const messageToAdmin = buildMessageToAdmin({
        nama,
        gender,
        phone,
        lokasi,
        detailAlamat,
        catatan,
        tanggal,
        jam,
        treatment,
        level,
        durasi,
        harga,
        payment,
      });

      const whatsappUrl = `https://wa.me/6285753421213?text=${encodeURIComponent(
        messageToAdmin
      )}`;

      //chat tips jika ada keluhan
      const hasKeluhan = keluhan && keluhan.trim().length > 0;

      if (hasKeluhan) {
        const res = await fetch("/api/tips", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ keluhan }),
        });

        const data = await res.json();

        

        if (data.success && Array.isArray(data.data)) {
          const customerMessage = buildMessageToPelanggan({ nama, tips: data.data });

          const formattedPhone = normalizeTo62(phone);
          fetch("/api/sendWA", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone: formattedPhone,
              message: customerMessage,
              delay: 30000,
            }),
          });
        }
      }

      //  redirect ke wa
      window.location.href = whatsappUrl;
    } catch (err) {
      console.error("Gagal submit:", err);

      const fallback = `
Halo Admin, saya ingin reservasi layanan spa.

Nama: ${nama}
Tanggal: ${tanggal}
Jam: ${jam}
`.trim();

      window.location.href =
        "https://wa.me/6289689346487?text=" +
        encodeURIComponent(fallback);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={loading}
      className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
    >
      {loading ? "Memproses..." : "Kirim Booking"}
    </button>
  );
}