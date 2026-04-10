import { useEffect, useState } from 'react'
import { useFavoritos } from '../../context/FavoritosContext'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'
import { db } from '../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { FaArrowLeft, FaTrash } from 'react-icons/fa'

type Veiculo = {
  id: string
  marca: string
  modelo: string
  ano: number
  km: number
  preco: number
  combustivel: string
  imagens: string[]
}

function Favoritos() {
  const { favoritos, toggleFavorito } = useFavoritos()
  const navigate = useNavigate()
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function buscarVeiculos() {
      try {
        const querySnapshot = await getDocs(collection(db, "veiculos"))
        const lista: Veiculo[] = []
        querySnapshot.forEach((doc) => {
          lista.push({ id: doc.id, ...doc.data() } as Veiculo)
        })
        setVeiculos(lista)
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error)
      } finally {
        setLoading(false)
      }
    }
    buscarVeiculos()
  }, [])

  const listaFavoritos = veiculos.filter(v => favoritos.includes(v.id))

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Carregando seus favoritos...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:hidden">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 mb-6"
      >
        <FaArrowLeft /> Voltar
      </button>

      <h1 className="text-2xl font-bold mb-6">
        Meus Favoritos ({listaFavoritos.length})
      </h1>

      {listaFavoritos.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <p className="text-lg text-center px-10">
            Você ainda não tem veículos favoritos salvos.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="mt-6 bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            Explorar Motos
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {listaFavoritos.map((veiculo) => (
            <Card 
              key={veiculo.id}
              className="relative overflow-hidden shadow-sm flex flex-row h-28 border border-gray-200 bg-white rounded-xl p-0"
              onClick={() => navigate(`/detalhes/${veiculo.id}`)}
            >
              {/* Imagem */}
              <div className="w-32 h-full shrink-0">
                <img 
                  src={veiculo.imagens[0]} 
                  alt={veiculo.modelo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Conteúdo */}
              <CardHeader className="flex-1 p-4 justify-center gap-0">
                <CardTitle className="text-sm font-bold text-gray-900">
                  {veiculo.marca} {veiculo.modelo}
                </CardTitle>
                
                <CardDescription className="flex flex-col gap-1 mt-1">
                  <span className="text-red-600 font-extrabold text-lg leading-none">
                    R$ {veiculo.preco.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                    {veiculo.ano} • {veiculo.km.toLocaleString()} km
                  </span>
                </CardDescription>
              </CardHeader>

              {/* Botão remover */}
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorito(veiculo.id)
                }}
                className="absolute top-1 right-1 p-2 text-gray-400 hover:text-red-600 transition"
              >
                <FaTrash size={14} />
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favoritos