import Image from "next/image";
import logo from '@/public/images/home-spa-logo.webp';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

export default function Footer () {
    return (
        <footer id="kontak"
        className="bg-[#4B1A09]">
  <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <div className="flex justify-center sm:justify-start">
            <Image src={logo} width={160} height={100} quality={70}  alt="spa logo" />
        </div>

        <p className="mt-6 max-w-md text-center mx-auto sm:mx-0 leading-relaxed text-white sm:max-w-xs sm:text-left">
            <span>
           Satu-satunya home spa di Samarinda dengan ranjang pijat sungguhan. Nikmati pijat tubuh yang menenangkan, manicure dengan lebih dari 50 pilihan warna kuku, musik spa, dan aromaterapi langsung di rumah Anda. 
            </span>
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:text-slate-400">
              <span className="sr-only">Facebook</span>
              <div>
                <span><FaFacebookSquare className="w-10 h-10"/></span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:text-slate-400">
              <span className="sr-only">Instagram</span>
              <div className="">
                <span className=""><FaInstagram className="w-10 h-10"/></span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:text-slate-400">
              <span className="sr-only">Tiktok</span>
              <div className="">
                <span className=""><AiFillTikTok className="w-11 h-11"/></span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:flex md:gap-22 w-full mt-12 md:mt-0">
        <div className="text-center sm:text-left">
          <p className="text-xl font-medium text-gray-200">Area Layanan</p>

          <ul className="mt-8 space-y-4 text-md flex flex-col items-start ">
            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400 text-left" href="#">
                <GiCheckMark /> pijat panggilan Bandung
              </a>
            </li>

            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
                <GiCheckMark />  Kota Samarinda
              </a>
            </li>

            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
                <GiCheckMark />  Kabupaten Samarinda Seberang
              </a>
            </li>

          </ul>
        </div>

        <div className="text-center sm:text-left mt-22 md:mt-0">
          <p className="text-xl font-medium text-gray-200">Price List & Reservasi</p>
          <ul className="mt-8 space-y-4 text-md">
            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
               <GiCheckMark />  Reservasi
              </a>
            </li>

            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
               <GiCheckMark />  Price List
              </a>
            </li>

            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
               <GiCheckMark />  Phone: 0822-5312-9334
              </a>
            </li>

            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
               <GiCheckMark />  Privacy Policy
              </a>
            </li>

            <li>
              <a className="text-white flex gap-2 transition hover:text-slate-400" href="#">
                <GiCheckMark />  Term & Condition
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-center sm:text-center">
        <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
          © 2026 Home Spa
        </p>
      </div>
    </div>
  </div>
</footer>
    )
}