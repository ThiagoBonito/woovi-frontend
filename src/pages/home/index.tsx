import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-center items-center gap-2">
      <img src="/pix.svg" className="w-56 h-44"/>
        <form className="flex flex-col gap-2 border border-1 rounded-md w-[40rem] p-4">
          <Input />
          <Input />
          <Button onClick={() => navigate("/")}>Back Login</Button>
        </form>
    </div>
  )
}

export default HomePage