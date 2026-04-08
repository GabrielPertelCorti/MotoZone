import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import { FaDroplet, FaWhatsapp, FaArrowLeft } from "react-icons/fa6"
import { FaCalendarAlt, FaRoad, FaMoneyBillWave } from "react-icons/fa"

interface Veiculo {
  id: string
  marca: string
  modelo: string
  ano: number
  km: number
  preco: number
  combustivel: string
  imagens: string[]
}

function Detalhes() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [veiculo, setVeiculo] = useState<Veiculo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function buscarVeiculo() {
      if (!id) return

      try {
        const docRef = doc(db, "veiculos", id)
        const snapshot = await getDoc(docRef)

        if (snapshot.exists()) {
          setVeiculo({
            id: snapshot.id,
            ...snapshot.data()
          } as Veiculo)
        }
      } catch (error) {
        console.error("Erro ao buscar veículo:", error)
      } finally {
        setLoading(false)
      }
    }

    buscarVeiculo()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Carregando detalhes...</p>
      </div>
    )
  }

  if (!veiculo) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <p className="text-xl font-semibold">Veículo não encontrado.</p>
        <button 
          onClick={() => navigate("/")}
          className="bg-red-600 text-white px-6 py-2 rounded-md"
        >
          Voltar para Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-6 transition-colors">
        <FaArrowLeft /> Voltar
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {veiculo.imagens.map((img, index) => (
                <CarouselItem key={index}>
                  <img 
                    src={img} 
                    alt={`${veiculo.modelo} - imagem ${index + 1}`} 
                    className="w-full h-[500px] object-cover rounded-xl shadow-lg"/>
                </CarouselItem>
              ))}
            </CarouselContent>
            {veiculo.imagens.length > 1 && (
              <>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </>
            )}
          </Carousel>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">{veiculo.marca}</h1>
            <h2 className="text-3xl font-bold text-gray-700">{veiculo.modelo}</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <FaCalendarAlt className="text-red-600 text-xl" />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Ano</p>
                <p className="font-semibold">{veiculo.ano}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <FaRoad className="text-red-600 text-xl" />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">KM</p>
                <p className="font-semibold">{veiculo.km.toLocaleString()} km</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <FaDroplet className="text-red-600 text-xl" />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Combustível</p>
                <p className="font-semibold">{veiculo.combustivel}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <FaMoneyBillWave className="text-red-600 text-xl" />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Preço</p>
                <p className="text-2xl font-bold text-red-600">R$ {veiculo.preco.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Ficou interessado?</h3>
            <a 
              href={`https://wa.me/5527996573238?text=Olá, tenho interesse na ${veiculo.marca} ${veiculo.modelo} que vi no site!`}
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 rounded-xl text-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:scale-[1.02]">
              <FaWhatsapp size={28} />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalhes;