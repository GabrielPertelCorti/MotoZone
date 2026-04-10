import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import SidebarFiltros from '../../components/sidebarFiltros/SidebarFiltros'
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'
import banner from '../../assets/banner3.png'
import { FaWhatsapp, FaDroplet } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Carousel } from '../../components/ui/carousel'
import { useFavoritos } from '../../context/FavoritosContext'
import SidebarFavoritos from '../../components/sidebarFavoritos/SidebarFavoritos'
import { useNavigate } from 'react-router-dom'

import { db } from '../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

export type Veiculo = {
  id: string
  marca: string
  modelo: string
  ano: number
  km: number
  preco: number
  combustivel: string
  imagens: string[]
}

function Home(){
  const { toggleFavorito, favoritos } = useFavoritos()
  const navigate = useNavigate()

  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [busca, setBusca] = useState('')
  const [marcaFiltro, setMarcaFiltro] = useState("")
  const [precoFiltro, setPrecoFiltro] = useState(100000)
  const [kmFiltro, setKmFiltro] = useState(100000)
  const [anoFiltro, setAnoFiltro] = useState(2000)

  const [filtrosAberto, setFiltrosAberto] = useState(false)

  useEffect(() => {
    async function buscarVeiculos() {
      const querySnapshot = await getDocs(collection(db, "veiculos"))

      const lista: Veiculo[] = []

      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() } as Veiculo)
      })

      setVeiculos(lista)
    }

    buscarVeiculos()
  }, [])

  const veiculosFiltrados = veiculos.filter((v) => {
    const matchBusca = v.modelo.toLowerCase().includes(busca.toLowerCase())
    const matchMarca = marcaFiltro ? v.marca === marcaFiltro : true
    const matchPreco = v.preco <= precoFiltro
    const matchKm = v.km <= kmFiltro
    const matchAno = v.ano >= anoFiltro

    return matchBusca && matchMarca && matchPreco && matchKm && matchAno
  })

  return (
    <>
      <SidebarFavoritos veiculos={veiculos} />

      <div className="md:hidden flex justify-end items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
        <button 
          onClick={() => setFiltrosAberto(true)}
          className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm"
        >
          <Search size={16} />
          Filtrar Resultados
        </button>
      </div>


      {filtrosAberto && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex">
          <div className="bg-white w-80 h-full p-6 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
              <button 
                onClick={() => setFiltrosAberto(false)} 
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                <IoMdClose size={20} className='text-gray-600'/>
              </button>
            </div>

            <SidebarFiltros
              marca={marcaFiltro}
              setMarca={setMarcaFiltro}
              preco={precoFiltro}
              setPreco={setPrecoFiltro}
              km={kmFiltro}
              setKm={setKmFiltro}
              ano={anoFiltro}
              setAno={setAnoFiltro}
            />
            
            <button 
              onClick={() => setFiltrosAberto(false)}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold mt-8 shadow-lg"
            >
              Ver Resultados
            </button>
          </div>

          <div className="flex-1" onClick={() => setFiltrosAberto(false)} />
        </div>
      )}

      <img 
        src={banner} 
        alt="Banner" 
        className="hidden md:block w-full h-auto object-cover" 
      />

      <div className='flex flex-col md:flex-row gap-8 mt-8'>

        <div className="hidden md:block">
          <SidebarFiltros
            marca={marcaFiltro}
            setMarca={setMarcaFiltro}
            preco={precoFiltro}
            setPreco={setPrecoFiltro}
            km={kmFiltro}
            setKm={setKmFiltro}
            ano={anoFiltro}
            setAno={setAnoFiltro}
          />
        </div>

        <div className='flex-1 w-full px-4 sm:px-6 md:px-0'>

          <div className="flex justify-center items-center mb-6">
            <input 
              type="text" 
              placeholder="Pesquise por modelo"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="flex w-full max-w-lg h-10 border shadow-md border-gray-400 rounded-l-md px-3 text-sm md:text-lg" 
            />
            <button className="px-3 h-10 py-2 bg-red-600 rounded-r-md shadow-md text-white">
              <Search size={18}/>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 pb-10">
            {veiculosFiltrados.map((veiculo) => (
              <Card 
                key={veiculo.id} 
                className='shadow-md border border-gray-100 w-full cursor-pointer'
                onClick={() => navigate(`/detalhes/${veiculo.id}`)}>

                <Carousel onClick={(e) => e.stopPropagation()}>
                  <CarouselContent>
                    {veiculo.imagens.map((img, i) => (
                      <CarouselItem key={i}>
                        <img 
                          src={img} 
                          alt={veiculo.modelo}
                          className='w-full h-52 md:h-68 object-cover' />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious className='left-2 bg-black/60 text-white border-none'/>
                  <CarouselNext className='right-2 bg-black/60 text-white border-none'/>
                </Carousel>

                <CardHeader>
                  <CardTitle>
                    {veiculo.marca} {veiculo.modelo}
                  </CardTitle>

                  <CardDescription>
                    <div className="flex justify-between text-sm">
                      <span>{veiculo.ano}</span>
                      <span>{veiculo.km.toLocaleString()} km</span>
                    </div>

                    <p className="text-red-600 font-bold text-xl mt-2">
                      R$ {veiculo.preco.toLocaleString()}
                    </p>

                    <div className="flex justify-between text-sm mt-2">
                      <span className='flex items-center gap-1'>
                        <FaDroplet /> {veiculo.combustivel}
                      </span>

                      <span className='flex items-center gap-3'> 
                        <FaHeart 
                          size={20} 
                          className={favoritos.includes(veiculo.id) ? 'text-red-600' : 'text-gray-400'}
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorito(veiculo.id)
                          }}/> 

                        <a href="https://wa.me/11999999999" target="_blank">
                          <FaWhatsapp size={20} className='text-green-500'/>
                        </a>
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>

              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home