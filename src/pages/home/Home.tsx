import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import SidebarFiltros from '../../components/sidebarFiltros/SidebarFiltros'
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'
import banner from '../../assets/banner2!-recortado.png'
import { FaWhatsapp, FaDroplet } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Carousel } from '../../components/ui/carousel'
import { useFavoritos } from '../../context/FavoritosContext'
import SidebarFavoritos from '../../components/sidebarFavoritos/SidebarFavoritos'

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

  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [busca, setBusca] = useState('')
  const [marcaFiltro, setMarcaFiltro] = useState("")
  const [precoFiltro, setPrecoFiltro] = useState(100000)
  const [kmFiltro, setKmFiltro] = useState(100000)
  const [anoFiltro, setAnoFiltro] = useState(2000)

  useEffect(() => {
    async function buscarVeiculos() {
      const querySnapshot = await getDocs(collection(db, "veiculos"));

      const lista = [];

      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });

      setVeiculos(lista);
    }

    buscarVeiculos();
  }, []);

//   const veiculosFiltrados = veiculos.filter((veiculo) =>
//   veiculo.modelo.toLowerCase().includes(busca.toLowerCase())
// )
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
      <img src={banner} alt="Banner" className="w-full h-auto object-cover" />

      <div className='flex gap-8  mt-8'>
        <SidebarFiltros
        marca={marcaFiltro}
        setMarca={setMarcaFiltro}
        preco={precoFiltro}
        setPreco={setPrecoFiltro}
        km={kmFiltro}
        setKm={setKmFiltro}
        ano={anoFiltro}
        setAno={setAnoFiltro} />

        <div className='flex-1'>
          <div className="flex justify-center items-center mb-10">
            <input 
              type="text" 
              placeholder="Pesquise por modelo"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="flex w-full max-w-lg h-10 border shadow-md p-1 border-gray-400 rounded-l-md p-3 text-lg" 
            />
            <button className="p-3 py-2 bg-red-600 rounded-r-md shadow-md text-white">
              <Search />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {veiculosFiltrados.map((veiculo) => (
              <Card key={veiculo.id} className='shadow-md hover:shadow-lg transition-shadow border border-gray-100 w-90 h-110'>


                {/* <img src={veiculo.imagem} alt={veiculo.modelo} className="w-full h-68 object-cover rounded-t-xl" /> */}
                <Carousel className="relative">
                  <CarouselContent>
                    {veiculo.imagens.map((img, i) => (
                      <CarouselItem key={i}>
                        <img src={img} alt={veiculo.modelo} className='w-full h-68 object-cover' />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className='left-2 bg-black/60 text-white hover:bg-black/70 border-none'/>
                  <CarouselNext className='right-2 bg-black/60 text-white hover:bg-black/70 border-none'/>
                </Carousel>


                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {veiculo.marca} {veiculo.modelo}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex justify-between text-sm mt-1 text-gray-500">
                      <span>{veiculo.ano}</span>
                      <span>{veiculo.km.toLocaleString()} km</span>
                    </div>
                    <p className="text-red-600 font-bold text-xl mt-4">
                      R$ {veiculo.preco.toLocaleString()}
                    </p>
                    <div className="flex justify-between  text-sm mt-2">
                      <span className='flex items-center gap-1'><FaDroplet />{veiculo.combustivel}</span>
                      <span className='flex items-center gap-3'> 
                        <FaHeart 
                          size={20} 
                          className={`cursor-pointer transition-colors ${favoritos.includes(veiculo.id) ? 'text-red-600' : 'text-gray-400 hover:text-red-400'}`}
                          onClick={() => toggleFavorito(veiculo.id)}
                        /> 
                        <a href="https://wa.me/11999999999" target="_blank" ><FaWhatsapp size={20} className='text-green-500'/></a>
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