import { auth } from "../../services/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate()

    async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, senha)
      navigate("/admin")
    } catch (error) {
      alert("Erro ao fazer login" + error)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center flex-col">



      <div className="h-60 w-80 items-center justify-center flex border border-gray-300 rounded-md p-6 shadow-md flex-col ">  

        <h1 className="mb-4 text-xl font-semibold text-shadow-2xs text-gray-600">Admin</h1>

        <div className="flex flex-col items-center justify-center gap-4">

          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite o e-mail" className="border rounded-md p-2"/>

          <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite a senha"  className="border rounded-md p-2"/>

          <button onClick={handleLogin} type="submit" className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition-colors duration-300">
            Fazer Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login