import { BsFillTelephoneFill } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useState } from "react"
import { toast } from "sonner"

function Contato() {

  const [assunto, setAssunto] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [nome, setNome] = useState("")
  const [infoAdicionais, setInfoAdicionais] = useState("")

  const enviarFormulario = async () => {
  try {
    await addDoc(collection(db, "contato"), {
      assunto,
      email,
      infoAdicionais,
      nome,
      telefone,
      createdAt: serverTimestamp(),
    });

    toast.success("Enviado com sucesso!");
  } catch (error) {
    console.error(error);
    toast.error("Erro ao enviar mensagem!");
  }
};

  return (
    <div className="mt-12 min-h-screen justify-center flex px-4">
      <div className="w-full md:w-[1300px] flex flex-col">

        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Envie sua mensagem</h1>
            </div>

            <div>

              <div className="flex flex-col md:flex-row gap-6 mb-5">
                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label htmlFor="nome">Nome</label>
                  <input className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" type="text" placeholder="Seu nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label htmlFor="email">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" type="email" placeholder="Seu email" name="email" />
                </div>

              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-5">
                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label htmlFor="telefone">Telefone</label>
                  <input className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" type="text" placeholder="Telefone" name="telefone" value={telefone} onChange={(e) => { const valor = e.target.value.replace(/\D/g,'');setTelefone(valor)}}/>
                </div>

                <div className="flex flex-col gap-1 w-full md:w-98">
                  <label htmlFor="assunto">Assunto</label>
                  <input className="border border-gray-600 w-full md:w-98 h-10 rounded-md focus:border-blue-500 p-3" type="text" placeholder="Assunto" name="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                </div>
                <div>
              </div>

              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-1 w-full md:w-202" >
                  <label htmlFor="infoAdicionais">Informações adicionais:</label>
                  <textarea value={infoAdicionais} onChange={(e) => setInfoAdicionais(e.target.value)} className="w-full md:w-202 h-15 border border-gray-600 rounded-md focus:border-blue-500 p-3" name="infoAdicionais" id="infoAdicionais"></textarea>
                </div>
              </div>

              <button onClick={enviarFormulario} className="justify-start w-full md:w-18 h-11 bg-blue-500 rounded-md mt-5 text-white text-semibold text-lg hover:bg-blue-600">
                Enviar
              </button>

            </div>
          </div>

          <div className="w-full md:w-110 md:h-95 px-10 py-15 border border-gray-300 shadow-md rounded-md">
            <div className="">
              <h2 className="text-lg font-semibold mb-1">Contato</h2>
              <p className="flex items-center gap-1"><BsFillTelephoneFill className="text-blue-400"/> (27) 99999-9999</p>
              <p className="flex items-center gap-1"><FaWhatsapp className="text-green-500"/> (27) 98888-8888</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1 mt-4">Endereço</h2>
              <p className="flex items-center gap-1"><FaMapMarkerAlt className="text-blue-400"/>Av. Fulano De Tal, 100 - Vitória/ES</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mt-4 mb-1">Horário de atendimento</h2>
              <p><strong>Segunda à sexta:</strong> 08:00 às 18:00</p>
              <p><strong>Sábado:</strong> 08:00 às 13:00</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
export default Contato