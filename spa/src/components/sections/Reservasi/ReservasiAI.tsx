import ButtonReservasi from "@/components/ui/ButtonReservasi"


export default function ReservasiAI() {
    return (

        <div className="reservasi-ai bg-second rounded-[15px] p-10 ">
            <h3 className="title text-main text-[35px] font-bold font-poppins">Rekomendasi AI</h3>
            <p className="teks text-[25px] font-poppins text-main">Bingung pilih treatment? Ceritakan apa yang kamu rasakan, dan kami akan pilihkan layanan yang paling cocok buat kamu.</p>
            <ButtonReservasi>Mulai Konsultasi AI</ButtonReservasi>
        </div>
    )
}