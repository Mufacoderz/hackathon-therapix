"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "Lokasi",
    href: "#layanan",
  },
  {
    label: "Layanan",
    href: "#blog",
  },
  {
    label: "FAQ",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
<header className="fixed top-0 left-0 z-50 w-full">
  <nav
    className="
      flex
      h-18
      items-center
      justify-between
      border-b
      border-border/20
      bg-background/10
      px-6
      backdrop-blur-xl
      shadow-[0_8px_32px_rgba(0,0,0,0.15)]
    "
  >
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/images/logo.png"
        alt="De Home Spa"
        width={52}
        height={52}
      />

      <h1
        className="
          text-2xl
          font-extrabold
          tracking-tight
          text-white
          font-poppins
        "
      >
        De Home Spa
      </h1>
    </Link>

    <ul className="hidden items-center gap-12 md:flex pr-10">
      {navItems.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="
              text-base
              font-poppins
              font-medium
              tracking-tight
              text-white
              transition-all
              duration-300
              hover:opacity-70
            "
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>

    <div className="md:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              text-white
              transition-all
              duration-300
              hover:opacity-70
            "
          >
            <IoMenu className="h-7 w-7" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="
            border-border/20
            bg-black/90
            text-white
            backdrop-blur-2xl
          "
        >
          <div className="mt-12 ml-10 flex flex-col gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  transition-all
                  duration-300
                  hover:opacity-70
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</header>
  );
}



// "use client"
// import logo from '@/public/images/home-spa-logo.webp';
// import {
//     Sheet,
//     SheetContent,
//     SheetFooter,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import Image from "next/image"
// import Link from "next/link"
// import { useEffect, useState } from 'react';
// import { FaInstagram } from 'react-icons/fa';
// import { AiFillTikTok } from 'react-icons/ai';
// import { IoMenu } from 'react-icons/io5';



// export default function Navbar() {

//     const [isScrolled, setIsScrolled] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 0)
//         }
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     // 1) baca docs shadcn agar hamburger menu fungsi 
//     // - bagian sheet

//     return (
//         <nav
//             className={`bg-neutral-primary fixed w-full z-20 top-0 start-0 transition-all duration-700 ${isScrolled ? 'backdrop-blur-sm bg-opacity-95 border-b border-default' : ''}`}
//         >
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-[#B7A997]">
//                 <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <Image src={logo} width={82} height={62} quality={70} alt="Home Spa Logo" />
//                     <span className="self-center hidden md:block text-xl text-heading font-semibold whitespace-nowrap">Home SPA</span>
//                 </Link>

//                 {/* hamburger area start */}

//                 <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                     <button type="button" className="hover:bg-brand-strong box-border border border-transparent cursor-pointer font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Reservasi Sekarang!</button>
//                     <Sheet>
//                         <SheetTrigger>
//                             <button className='inline-flex items-center p-2 w-11 h-11 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary'>
//                                 <IoMenu className='w-full h-full' />
//                             </button>
//                         </SheetTrigger>

//                         <SheetContent side='left' className='bg-[#F5E6C8]'>
//                             <SheetHeader>
//                                 <SheetTitle>
//                                     <div className='flex justify-start items-center mr-4'>
//                                     <Image src={logo} width={100} height={80} alt='logo spa' />
//                                     </div>
//                                 </SheetTitle>
//                             </SheetHeader>
//                             <section className='flex flex-col'>
//                                 <div className='flex flex-col gap-4 ml-4'>
//                                     <Link href='#beranda'>
//                                     Beranda
//                                     </Link>
//                                     <Link href='#tentang'>
//                                     Tentang Kami
//                                     </Link>
//                                     <Link href='#layanan'>
//                                     Layanan
//                                     </Link>
//                                     <Link href='#kontak'>
//                                     Kontak
//                                     </Link>
//                                 </div>
//                             </section>
//                             <SheetFooter className='mb-2'>
//                                 <section className='flex flex-col'>
//                                 <div className='mb-4'>
//                                     <div className="mb-2">
//                                         <span className="flex flex-col justify-start items-center gap-2 mb-8 wrap-break-word">
//                                             <p>Temukan juga Home Spa</p>
//                                             <p> Samarinda di : </p>
//                                             </span>
//                                     </div>
//                                     <div className="mb-2">
//                                         <span className="flex justify-center items-center gap-2">
//                                             <FaInstagram className="w-6 h-6" />
//                                             <p>@home-spa-samarinda</p>
//                                             </span>
//                                     </div>
//                                     <div className="">
//                                         <span className="flex justify-center items-center gap-2">
//                                             <AiFillTikTok className="w-6 h-6" />
//                                             <p>@home-spa-samarinda</p>
//                                             </span>
//                                     </div>
//                                 </div>
//                                 <div>

//                                 </div>
//                                 <button>© Home Spa - 2026</button>
//                                 </section>
//                             </SheetFooter>
//                         </SheetContent>
//                     </Sheet>
//                 </div>

//                 {/* hamburger area end */}

//                 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//                     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
//                         <li>
//                             <Link href="#beranda" className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Beranda</Link>
//                         </li>
//                         <li>
//                             <Link href="#tentang" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Tentang</Link>
//                         </li>
//                         <li>
//                             <Link href="#layanan" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Layanan</Link>
//                         </li>
//                         <li>
//                             <Link href="#kontak" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Kontak</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }

