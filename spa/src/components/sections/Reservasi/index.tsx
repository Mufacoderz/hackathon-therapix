
import ReservasiAI from "./ReservasiAI";
import ReservasiManual from "./ReservasiManual";


export default function Reservasi() {
    return (
        <section id="reservasi" className="bg-main flex justify-center flex-col w-full p-10 lg:p-28">
            <div className="reservasi-header flex items-center flex-col mb-10">
                <h2 className="title font-playfair font-bold text-[85px] text-main">Reservasi</h2>
                <p className="subtitle font-poppins text-[35px] text-main">Jadwalkan Sesi Relaksasimu</p>
            </div>
        <ReservasiAI/>
        <ReservasiManual/>
        </section>
    )
}