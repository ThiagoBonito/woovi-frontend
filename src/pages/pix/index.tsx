import { Copy, HandCoins, Money } from "@phosphor-icons/react";
import { Outlet, useNavigate } from "react-router-dom"

export function PixPage(){
    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">Área Pix</h1>
                <h2 className="text-xl font-normal">Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.</h2>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Enviar</h1>
                <div className="flex gap-16">
                    <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md" onClick={() => navigate("1/transfer")}>
                        <Money size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
                        <h1 className="text-lg font-semibold">Transferir</h1>
                    </div>
                    <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
                        <Copy size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
                        <h1 className="text-lg font-semibold">Pix copia e cola</h1>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold">Receber</h1>
                <div className="flex gap-16">
                    <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
                        <HandCoins size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
                        <h1 className="text-lg font-semibold">Cobrar</h1>
                    </div>
                    <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
                        <Money size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
                        <h1 className="text-lg font-semibold">Depositar</h1>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}