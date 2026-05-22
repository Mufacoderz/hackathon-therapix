import Image from "next/image"
import lulur from "@/public/images/aboutspa2.jpg"
import Link from "next/link"


export default function About() {
    return (
        <section className="bg-main">
            <div className="about2 w-full min-h-screen p-4 sm:p-8 lg:p-16">
                <div className="about-center relative pb-8 sm:pb-16">
                    <div className="about-bg bg-second px-6 py-10 sm:px-10 sm:py-14 lg:px-15 lg:py-20">
                        <div className="w-full lg:w-1/2">
                            <div className="about-head font-playfair text-main text-[40px] sm:text-[55px] lg:text-[70px]">
                                Tentang Kami
                            </div>
                            <div className="about-text font-poppins text-second text-[14px] sm:text-[15px] lg:text-base">
                                Di de HOME SPA, kami percaya bahwa di tengah hiruk-pikuk dunia, bisa beristirahat dengan mudah adalah kemewahan sejati. Kami hadir memadukan kecanggihan digital dengan sentuhan tangan yang tulus untuk memberikan pengalaman relaksasi yang berbeda.
                            </div>
                           
                            <Link href="#reservasi" className="inline-block mt-10 rounded-full bg-linear-to-r from-[#E3B45E] to-[#BD8622] px-10 py-4 font-poppins text-[16px] font-semibold text-white shadow-lg transition hover:scale-[1.03]">
                                Reservasi Sekarang
                            </Link>
                        </div>
                    </div>

                    <div className="block lg:hidden mt-6 px-6">
                        <Image
                            src={lulur}
                            alt="Image about"
                            width={630}
                            height={630}
                            className="w-full max-w-sm mx-auto object-contain rounded-2xl"
                        />
                    </div>
                    <Image
                        src={lulur}
                        alt="Image about"
                        width={630}
                        height={630}
                        className="hidden lg:block h-150 w-150 object-contain absolute right-10 top-10"
                    />
                </div>
            </div>
        </section>
    )
}