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

