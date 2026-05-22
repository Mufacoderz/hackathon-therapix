"use client"
import { serviceSpaData } from "@/data/spaService"
import CardSpa from "@/components/atoms/CardSpa"
import { motion } from 'framer-motion';

export default function CardSpaList() {

    return (
        <section
            className="mx-auto mt-12 mb-12"
            id="layanan"
        >
            <div
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-bold text-4xl text-center">Ingin Kerokan tanpa harus keluar rumah?</motion.h2>
                <div className="mt-8 mb-8 max-w-82  md:max-w-160 text-center mx-auto text-xl">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="wrap-break-word">Apakah Anda merasa badan greges, mual, atau pusing karena masuk angin? Jangan biarkan aktivitas Anda terganggu. Jemari Home Spa menghadirkan layanan Jasa Kerokan Panggilan profesional langsung ke rumah, apartemen, atau hotel Anda di area Bandung dan Cimahi.</motion.p>
                </div>
            </div>
            <div
                className="md:grid flex flex-col items-center justify-center md:grid-cols-3 gap-x-0 md:gap-x-12 gap-y-12 mt-22 mb-12">
                {
                    serviceSpaData.map((data, index) => (
                        <motion.div key={data.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <CardSpa
                                judulSpa={data.name}
                                deskripsiSpa={data.description}
                                gambarSpa={data.gambar} />
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}