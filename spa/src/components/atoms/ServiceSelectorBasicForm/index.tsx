"use client"

import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useRef, useState } from "react"
import { TREATMENTS } from "@/data/treatment"
import { option } from "framer-motion/client"
import CardDurasiHargaList from "@/components/moleculs/CardDurasiHargaList"


export default function ServiceSelectorBasicForm() {
    const [namaTreatment, setNamaTreatment] = useState('')
    const [levelTreatment, setLevelTreatment] = useState('')
    const [durasiTreatment, setDurasiTreatment] = useState('')
    const [hargaTreatment, setHargaTreatment] = useState('')
    const [namaPengunjung, setNamaPengunjung] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nohp, setNohp] = useState('')
    const [catatan, setCatatan] = useState('')
    const [gender, setGender] = useState<string[]>([]);
    const [payment, setPayment] = useState<string>('');
    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState("");
    const timeRef = useRef<HTMLInputElement>(null)

    const dataDiriRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
        const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;

        const script = document.createElement("script");
        script.src = snapScript;
        script.setAttribute("data-client-key", clientKey || "");
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const scrollToDataDiri = () => {
        closeDialog()
        setTimeout(() => {
            dataDiriRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
    }

    const isFormComplete =
        namaTreatment &&
        durasiTreatment &&
        namaPengunjung.trim() &&
        gender.length > 0 &&
        alamat.trim() &&
        date &&
        time &&
        nohp.trim()

    const openTimePicker = () => {
        timeRef.current?.focus()
        timeRef.current?.showPicker?.() // bonus (Chrome mobile/desktop)
    }
    const closeDialog = () => {
        const escapeEvent = new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27,
            bubbles: true,
        })
        document.dispatchEvent(escapeEvent)
    }

    const generatePaymentLink = async () => {

        const data = {
            price: Number(hargaTreatment)
        }

        const response = await fetch("/api/payment", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const requestData = await response.json();
        console.log({ requestData })

        if (requestData.token && typeof requestData.token === 'string') {
            window.snap.pay(requestData.token);
        } else {
            alert("Token tidak valid: " + JSON.stringify(requestData.token))
        }
    }



    const handleSubmit = () => {
        const message = `
Form Reservasi De Home SPA

*Data Pelanggan*
Nama: ${namaPengunjung}
Gender: ${gender}
Alamat: ${alamat}
No HP: ${nohp}
Tanggal: ${date}
Jam: ${time}
Metode Pembayaran: ${payment}
${catatan ? `Catatan: ${catatan}` : ""}

*Detail Treatment*
Treatment: ${namaTreatment}
Level: ${levelTreatment}
Durasi: ${durasiTreatment} menit
Harga: ${hargaTreatment}

Terima kasih.
    `.trim();

        window.open(`https://wa.me/6289689346487?text=${encodeURIComponent(message)}`, "_blank");
    };
    const handleOrder = async () => {
        if (!payment) {
            alert("Pilih metode pembayaran")
            return
        }

        if (payment === "cash") {
            handleSubmit()
            return
        }

        
    closeDialog() 

    setTimeout(async () => {
        await generatePaymentLink()
    }, 300)

    }

    const handleCheckboxGender = (value: string) => {
        setGender((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value])
    }
    return (
        <>
            <form action="">
                <section>
                    <div className="flex flex-col justify-start ">
                        <h2 className="text-3xl font-semibold">Form Reservasi Samarinda Home Spa</h2>
                        <p className="mt-2 text-lg font-light">FAQ : </p>
                        <p className="mt-2 text-lg font-light">- Jam Operasional : 08.00 - 21.00 </p>
                        <p className="mt-2 text-lg font-light">- Booking minimal 1 jam sebelumnya</p>
                        <p className="mt-2 text-lg font-light">- Free ongkos Transport</p>
                        <p className="mt-2 text-lg font-light">- Perlengakapan yang disediakan : Oil/Cream Massage, Kain alas & penutup badan, dan Handuk kecil</p>
                    </div>
                </section>
                <section className="mt-8">
                    {/* dialog  start */}
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                        {TREATMENTS.map((item) => (
                            <Dialog key={item.kode}>
                                <DialogTrigger asChild>
                                    <CardDurasiHargaList
                                        className={
                                            namaTreatment === item.nama
                                                ? "ring-4 ring-blue-500 rounded-2xl"
                                                : ""
                                        }
                                        name={item.nama}
                                        hargaList={
                                            namaTreatment === item.nama
                                                ? {
                                                    [Number(durasiTreatment)]:
                                                        Number(hargaTreatment),
                                                }
                                                : item.harga
                                        }

                                    />
                                </DialogTrigger>

                                <DialogContent className="w-md md:max-w-2xl min-h-75 rounded-2xl">
                                    <DialogHeader>
                                        <DialogTitle>{item.nama}</DialogTitle>
                                    </DialogHeader>

                                    <Select
                                        value={durasiTreatment}
                                        onValueChange={(value) => {
                                            setDurasiTreatment(value)
                                            setHargaTreatment(item.harga[Number(value)].toString())
                                            setNamaTreatment(item.nama)
                                            setLevelTreatment(item.level)

                                        }}

                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Pilih durasi" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {Object.entries(item.harga).map(
                                                ([durasi, harga]) => (
                                                    <SelectItem
                                                        key={durasi}
                                                        value={durasi}
                                                    >
                                                        {durasi} Menit - Rp{" "}
                                                        {harga.toLocaleString("id-ID")}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <Button
                                        onClick={scrollToDataDiri}
                                        className="w-full mt-6 bg-[#C9A882] hover:bg-[#B8956A] text-white h-12 rounded-md"
                                    >
                                        Lanjut isi data diri
                                    </Button>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                    {/* dialog  end */}
                    <div className="mb-32" ref={dataDiriRef}></div>
                    {/* pisah isi */}
                    <div className="md:flex w-full mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Nama Pengunjung<span className="text-red-600">*</span></label>
                            <input
                                className="border-2 h-12 w-full p-4 rounded-md"
                                type="text"
                                required
                                value={namaPengunjung}
                                onChange={(e) => setNamaPengunjung(e.target.value)}
                                placeholder="Masukan Nama Pengunjung"
                            />
                        </div>
                    </div>

                    {/* gender */}
                    <div className="flex flex-col w-full mt-8">
                        <label htmlFor="" className="mb-2 text-xl">Gender <span className="text-red-600">*</span></label>
                        <p className="text-sm text-gray-500 mb-1">Jika lebih dari 1 orang dan berbeda gender seperti pasangan suami istri, harap dicentang keduanya</p>
                        <label
                            className={
                                `flex justify-start items-center gap-6 w-full border-2 rounded-md h-12 py-2 px-8 mb-4 cursor-pointer
                        ${gender.includes("pria") ? 'border-4 border-[#8B6B52] text-[#9D8B7F]' : ''
                                }`
                            }
                        >
                            <Checkbox
                                id="pria"
                                checked={gender.includes("pria")}
                                onCheckedChange={() => handleCheckboxGender("pria")}
                                className="data-[state=checked]:bg-[#8B6B52] data-[state=checked]:border-[#C9A882] w-5 h-5"
                            />
                            <span
                                className="text-xl"
                            >Pria</span>
                        </label>
                        <label
                            className={
                                `flex justify-start items-center gap-6 w-full border-2 rounded-md h-12 py-2 px-8 cursor-pointer
                        ${gender.includes("wanita") ? 'border-4 border-[#8B6B52] text-[#9D8B7F]' : ''
                                }`

                            }
                        >
                            <Checkbox
                                id="wanita"
                                checked={gender.includes("wanita")}
                                onCheckedChange={() => handleCheckboxGender("wanita")}
                                className="data-[state=checked]:bg-[#8B6B52] data-[state=checked]:border-[#C9A882] w-5 h-5"
                            />
                            <span
                                className="text-xl"
                            >Wanita</span>
                        </label>
                    </div>

                    <div className="md:flex w-full mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Alamat Lengkap  <span className="text-red-600">*</span></label>
                            <textarea
                                required
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                                className="border-2 h-32 w-full p-4 rounded-md"
                                placeholder="Masukkan Alamat Lengkap" />
                        </div>
                    </div>

                    <div className="md:flex w-full mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Jadwal Treatment <span className="text-red-600">*</span></label>
                            {/* date expectected start */}
                            {/* tanggal */}
                            <div className="flex flex-col gap-2 mt-2">
                                <label className="">Tanggal Treatment</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="justify-start text-left font-normal h-12"
                                        >
                                            {date ? date.toLocaleDateString('id-ID') : "Pilih tanggal"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            id="date"
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            required
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* jam */}
                            <div className="flex flex-col gap-2 cursor-pointer mt-8"
                                onClick={openTimePicker}
                            >
                                <label>Jam Treatment</label>
                                <input
                                    ref={timeRef}
                                    type="time"
                                    required
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="border rounded-md h-12 px-3"
                                />
                                <p className="text-sm text-gray-500 mb-1">Harap reservasi 1 jam sebelumnya</p>
                            </div>

                        </div>
                    </div>

                    {/* date expectected end */}
                    <div className="md:flex w-full mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Nohp<span className="text-red-600">*</span></label>
                            <input
                                className="border-2 h-12 w-full p-4 rounded-md"
                                type="tel"
                                required
                                value={nohp}
                                onChange={(e) => setNohp(e.target.value)}
                                placeholder="08xxxxxxx"
                            />
                        </div>
                    </div>

                    <div className="md:flex w-full mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Catatan :</label>
                            <textarea
                                required
                                value={catatan}
                                onChange={(e) => setCatatan(e.target.value)}
                                className="border-2 h-32 w-full p-4 rounded-md"
                                placeholder="Masukkan Catatan" />
                        </div>
                    </div>
                </section>
                <div className="mt-12 flex justify-end">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                disabled={!isFormComplete}
                                className="w-full mt-6 bg-[#C9A882] hover:bg-[#B8956A] text-white h-12 rounded-md"
                            >
                                Pesan Sekarang!
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="w-md md:max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl">
                            <DialogHeader>
                                <DialogTitle className="text-center">Detail Pesanan</DialogTitle>
                            </DialogHeader>

                            <section className="space-y-3 text-sm mt-4">
                                <div className="border rounded-lg p-4 space-y-2">
                                    <h3 className="font-semibold text-lg">Detail Treatment</h3>
                                    <p><span className="font-medium">Treatment:</span> {namaTreatment || '-'}</p>
                                    <p><span className="font-medium">Level:</span> {levelTreatment || '-'}</p>
                                    <p><span className="font-medium">Durasi:</span> {durasiTreatment ? `${durasiTreatment} menit` : '-'}</p>
                                    <p><span className="font-medium">Harga:</span> {hargaTreatment ? `Rp ${Number(hargaTreatment).toLocaleString('id-ID')}` : '-'}</p>
                                </div>

                                <div className="border rounded-lg p-4 space-y-2">
                                    <h3 className="font-semibold text-lg">Data Pemesan</h3>
                                    <p><span className="font-medium">Nama:</span> {namaPengunjung || '-'}</p>
                                    <p><span className="font-medium">Gender:</span> {gender.length ? gender.join(', ') : '-'}</p>
                                    <p><span className="font-medium">No HP:</span> {nohp || '-'}</p>
                                    <p><span className="font-medium">Alamat:</span> {alamat || '-'}</p>
                                    <p><span className="font-medium">Tanggal:</span> {date ? date.toLocaleDateString('id-ID') : '-'}</p>
                                    <p><span className="font-medium">Jam:</span> {time || '-'}</p>
                                    <p><span className="font-medium">Pembayaran:</span> {payment || '-'}</p>
                                    {catatan && (
                                        <p><span className="font-medium">Catatan:</span> {catatan}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-lg font-medium">Metode Pembayaran</label>
                                    <select
                                        value={payment}
                                        onChange={(e) => setPayment(e.target.value)}
                                        className="w-full h-12 rounded-md border px-4 mt-2"
                                    >
                                        <option value="">Pilih metode pembayaran</option>
                                        <option value="cash">Cash (Bayar di tempat)</option>
                                        <option value="online">Online Payment (QRIS / Transfer / E-Wallet)</option>
                                    </select>
                                </div>
                            </section>

                            <div className="flex flex-col gap-y-2 mt-4">
                                <button
                                    type="button"
                                    onClick={handleOrder}
                                    className="w-full h-12 rounded-md bg-[#C9A882] text-white"
                                >
                                    Pesan Sekarang!
                                </button>

                                <DialogClose asChild>
                                    <button
                                        type="button"
                                        className="w-full h-12 rounded-md bg-black text-white"
                                    >
                                        Batal
                                    </button>
                                </DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </form>
        </>
    )
}