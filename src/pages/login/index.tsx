import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-center items-center gap-2">
      <img src="/pix.svg" className="w-56 h-44"/>
      <form className="flex flex-col gap-8 py-12 px-8 border border-1 rounded-md w-[40rem] p-4">
        <div className="flex flex-col gap-2">
          <Input placeholder="E-mail"/>
          <Input placeholder="Password"/>
        </div>
        <div className="flex flex-col gap-2">
        <Button onClick={() => navigate("/home")}>Log in</Button>
        <Button>Create account</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage