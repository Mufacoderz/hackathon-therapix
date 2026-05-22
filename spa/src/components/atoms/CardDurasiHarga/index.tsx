import { IoSparklesOutline } from "react-icons/io5";

export default function CardDurasiHarga({
    name,
     hargaList
    }: {
        name: string; hargaList: {
    [key:number]:number;
}
}) {
    return (
        <>
        <section className="">
            <div className="border-blue-900 border-2 rounded-2xl w-68 md:w-72 min-h-62 cursor-pointer">
            <div className="bg-blue-500 rounded-t-2xl flex justify-center items-center h-16 px-2 py-2 gap-6">
                <div className="border-2 border-blue-300 rounded-full w-8 h-8 flex justify-center items-center">
                <IoSparklesOutline className="w-4 h-4 text-white"/>
                </div>
                <h4 className="font-semibold tracking-wide text-white">{name}</h4>
            </div>
        <div className="px-4">
  {Object.entries(hargaList).map(([durasi, harga]) => (
    <div
      key={durasi}
      className="flex justify-between px-2 py-2"
    >
      <p>- {durasi} menit</p>
      <p>
        Rp. {harga.toLocaleString("id-ID")}
      </p>
    </div>
  ))}
</div>
            </div>
        </section>
        
        </>
    )
}