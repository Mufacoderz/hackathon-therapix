import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode
}

export default function ButtonReservasi({children}:ButtonProps) {
    return (
        <Link href="/flow" className="inline-block mt-10 rounded-full bg-linear-to-r from-[#E3B45E] to-[#BD8622] px-10 py-4 font-poppins text-[16px] font-semibold text-white shadow-lg transition hover:scale-[1.03]">
            {children}
        </Link>
    )
}
