"use client"
import ServiceSelectorValue from "@/components/atoms/ServiceSelectorValue";
import { useState } from 'react'

export default function ServiceSelectorHeader() {
    const [isButtonClick, setIsButtonClick] = useState('aiform')

    const WorkWhenClick = {
        backgroundColor: isButtonClick === 'aiform' ? '#C9A882' : 'white',
        color: isButtonClick === 'aiform' ? 'white' : '#8B6B52'
    }
    const StudiesWhenClick = {
        backgroundColor: isButtonClick === 'manualform' ? '#C9A882' : 'white',
        color: isButtonClick === 'manualform' ? 'white' : '#8B6B52'
    }

    return (
        <div className="flex justify-center items-center mt-32" translate="no">
            <section className="w-90 md:w-280" id="experience">
                <div className="flex justify-center mt-6 mb-8 ml-4 md:ml-0">
                    <h1 className="mb-4 flex text-black font-extrabold text-3xl tracking-wide">Rekomendasi Reservasi</h1>
                </div>
                <div className="mx-auto w-84 md:w-164 h-12 mb-12">
                    <section className="flex justify-center md:justify-center items-center border-2 border-[#8B6B52] rounded-md w-full h-full gap-0">
                        <div className="w-40 md:w-80">
                            <div className="flex justify-around cursor-pointer rounded-md h-8 items-center w-38 md:w-80" style={WorkWhenClick}
                                onClick={() => setIsButtonClick('aiform')}
                            >
                                <div className="cursor-pointer">
                                    <button
                                    type="button"
                                        className="cursor-pointer">
                                        Rekomendasi Ai
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-40 md:w-80">
                            <div className="flex justify-around cursor-pointer rounded-md h-8 items-center w-38 md:w-80" style={StudiesWhenClick}
                                onClick={() => setIsButtonClick('manualform')}
                            >
                                <div className="cursor-pointer">
                                    <button
                                    type="button"
                                        className="cursor-pointer">Manual Form</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <ServiceSelectorValue setActiveTab={isButtonClick} />
            </section>
        </div>
    )
}