import { Outlet } from "react-router-dom";


export function HeaderLayout() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col gap-2">
      <div className="flex justify-around border-b border-1">
        <img src="/pix.svg" className="w-20 h-20" />
        <div className="flex gap-2 items-center">AA</div>
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col w-[70rem] h-full p-2 gap-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}