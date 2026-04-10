import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useState } from "react";
import { toast } from "sonner"	

function Avaliacao() {

  const [anoModelo, setAnoModelo] = useState("")
  const [celular, setCelular] = useState("")
  const [combustivel, setCombustivel] = useState("")
  const [cor, setCor] = useState("")
  const [email, setEmail] = useState("")
  const [infoAdicionais, setInfoAdicionais] = useState("")
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  const enviarFormulario = async () => {
    try {
      await addDoc(collection(db, "avaliacao"), {
        anoModelo,
        celular,
        combustivel,
        cor,
        email,
        infoAdicionais,
        marca,
        modelo,
        nome,
        telefone,
        createdAt: serverTimestamp(),
      });

      toast.success("Enviado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar formulário!");
    }
  };

  return (
    <div className="mt-12 flex justify-center px-4">

      <div className="w-full md:w-[1300px] flex flex-col">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Avalie o seu veículo com a gente.
          </h1>
          <p className="text-gray-600 mt-4 mb-6">
            Preencha o formulário abaixo e tenha a melhor avaliação do mercado para seu veículo.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-gray-800">

          {/* Dados do veiculo */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Dados do veículo</h2>

            <div>

              <div className="flex flex-col md:flex-row gap-6 mb-5">
                <div className="flex flex-col gap-1 w-full md:w-150">
                  <label>Marca:</label>
                  <input className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="text" placeholder="Ex. Honda"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-1 w-full md:w-150">
                  <label>Modelo:</label>
                  <input className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="text" placeholder="Ex. CB 300"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}/>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label>Ano/Modelo:</label>
                  <input className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" type="text" placeholder="Ex. 2025/2026"
                    value={anoModelo}
                    onChange={(e) => setAnoModelo(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label>Cor:</label>
                  <input className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-3" type="text" placeholder="Ex. Preto" value={cor}
                    onChange={(e) => setCor(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label>Combustível:</label>
                  <select className="border border-gray-600 w-full md:w-98 h-10 rounded-md p-2"value={combustivel}
                    onChange={(e) => setCombustivel(e.target.value)}>
                    <option value="">-- Selecione --</option>
                    <option value="gasolina">Gasolina</option>
                    <option value="etanol">Etanol</option>
                    <option value="flex">Flex</option>
                    <option value="diesel">Diesel</option>
                    <option value="gnv">Gnv</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Dados pessoais */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Dados Pessoais</h2>

            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <input className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="text" placeholder="Nome" value={nome}
                onChange={(e) => setNome(e.target.value)}/>

              <input className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="email" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <input className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="text" placeholder="Telefone" value={telefone}
                onChange={(e) => {const valor = e.target.value.replace(/\D/g, ''); setTelefone(valor)}}/>

              <input className="border border-gray-600 w-full md:w-150 h-10 rounded-md p-3" type="text" placeholder="Celular" value={celular}
                onChange={(e) => {const valor = e.target.value.replace(/\D/g, ''); setCelular(valor)}}/>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Informações adicionais</h2>

            <textarea className="w-full md:w-306 h-30 border border-gray-600 rounded-md p-3" value={infoAdicionais} onChange={(e) => setInfoAdicionais(e.target.value)}/>
          </div>

          <button onClick={enviarFormulario} className="w-full md:w-18 h-11 bg-blue-500 rounded-md mt-5 text-white text-lg hover:bg-blue-600">
            Enviar
          </button>

        </div>
      </div>
    </div>
  )
}

export default Avaliacao;