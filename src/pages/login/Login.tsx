function Login(){
  return (
    <div className="flex h-screen items-center justify-center flex-col">



      <div className="h-60 w-80 items-center justify-center flex border border-gray-300 rounded-md p-6 shadow-md flex-col ">  

        <h1 className="mb-4 text-xl font-semibold text-shadow-2xs text-gray-600">Admin</h1>

        <div className="flex flex-col items-center justify-center gap-4">

          <input type="email" placeholder="Digite o e-mail" className="border rounded-md p-2"/>

          <input type="password" placeholder="Digite a senha"  className="border rounded-md p-2"/>

          <button type="submit" className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition-colors duration-300">Fazer Login</button>

        </div>

      </div>

    </div>
  )
}

export default Login