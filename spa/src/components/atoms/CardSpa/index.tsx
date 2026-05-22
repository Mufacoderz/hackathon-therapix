import Image, { StaticImageData } from "next/image";

export default function CardSpa({ judulSpa, deskripsiSpa, gambarSpa }: {judulSpa: string; deskripsiSpa: string; gambarSpa: StaticImageData;}) {
    return (
        <>
        <div
        className="w-82 md:w-72 group rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2  hover:border-[#4B1A09] overflow-hidden">
                <article className="rounded-2xl relative">
                    <div className="w-82 h-52 md:w-72 md:h-52 rounded-2xl">
                        <Image src={gambarSpa} alt="home spa"
                            className="w-full h-full rounded-2xl  group-hover:scale-110 transition-transform duration-500 brightness-75"/>
                    </div>
                    <h2 className="block md:hidden text-center mt-6 font-bold tracking-wider">{judulSpa}</h2>
                    <div className="absolute w-82 h-52 md:w-72 md:h-52 rounded-2xl hover:bg-linear-to-t from-[#1b1b1c] via-[#1b1b1c]/70 to-transparent shadow-lg bottom-0 left-0 p-4 text-white translate-y-6 group-hover:opacity-100 opacity-0 group-hover:translate-y-0 ease-in-out transition-all duration-300 cursor-pointer">
                        <h2 className="absolute bottom-16 font-semibold text-sm leading-tight hover:underline whitespace-nowrap mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            {judulSpa}
                        </h2>
                        <h3 className="absolute w-full pr-6 bottom-6 font-normal text-xs leading-tight hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300">
                            {deskripsiSpa}
                        </h3>
                    </div>
                </article>
            </div>
        </>
    )
}