import { Briefcase, CaretRight, Eye, EyeSlash, Faders, PixLogo, Question, Shield, User } from "@phosphor-icons/react"

function HomePage() {

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col gap-2">
      <div className="flex justify-around border-b border-1">
        <img src="/pix.svg" className="w-20 h-20"/>
        <div className="flex gap-2 items-center">
          <Eye size={26} />
          <EyeSlash size={26} />
          <Question size={26} />
        </div>
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col w-[70rem] h-full p-2 gap-10">
          <div className="flex flex-col gap-1 border border-1 px-4 py-8 rounded-md">
            <h1 className="text-xl font-semibold pb-2">Olá, João</h1>
            <h1 className="text-lg font-semibold">Minha conta</h1>
            <h1 className="text-2xl font-semibold">R$ 1239,93</h1>
          </div>
          <div className="flex h-fit gap-6">
            <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
              <PixLogo size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
              <h1 className="text-lg font-semibold">Área Pix</h1>
            </div>
            <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
              <PixLogo size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
              <h1 className="text-lg font-semibold">Área Pix</h1>
            </div>
            <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
              <PixLogo size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
              <h1 className="text-lg font-semibold">Área Pix</h1>
            </div>
            <div className="flex flex-1 flex-col items-center border border-1 h-fit px-8 py-4 gap-2 rounded-md">
              <PixLogo size={56} className="flex rounded-full border border-1 font-semibold px-3 border-[#EFEFEE] bg-[#EFEFEE]"/>
              <h1 className="text-lg font-semibold">Área Pix</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col border border-1 rounded-md px-6 py-2">
              <div className="flex justify-between border-b border-1 px-2 py-3">
                <div className="flex gap-3 items-center">
                  <Question size={22} />
                  <h1>Me ajuda</h1>
                </div>
                <CaretRight size={22} />
              </div>
              <div className="flex justify-between border-b border-1 px-2 py-3">
                <div className="flex gap-3 items-center">
                  <User size={22} />
                  <h1>Meus Dados</h1>
                </div>
                <CaretRight size={22} />
              </div>
              <div className="flex justify-between border-b border-1 px-2 py-3">
                <div className="flex gap-3 items-center">
                  <Faders size={22} />
                  <h1>Configurar App</h1>
                </div>
                <CaretRight size={22} />
              </div>
              <div className="flex justify-between border-b border-1 px-2 py-3">
                <div className="flex gap-3 items-center">
                  <Shield size={22} />
                  <h1>Segurança</h1>
                </div>
                <CaretRight size={22} />
              </div>
              <div className="flex justify-between border-b border-1 px-2 py-3">
                <div className="flex gap-3 items-center">
                  <PixLogo size={22} />
                  <h1>Configurar chaves pix</h1>
                </div>
                <CaretRight size={22} />
              </div>
              <div className="flex justify-between px-2 py-3">
                <div className="flex gap-3 items-center">
                  <Briefcase size={22} />
                  <h1>Pedir conta PJ</h1>
                </div>
                <CaretRight size={22} />
              </div>
            </div>
            <div className="col-span-2 border border-1 rounded-md">Card</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage