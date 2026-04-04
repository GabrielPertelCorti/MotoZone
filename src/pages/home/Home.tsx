import { Search } from 'lucide-react'
import SidebarFiltros from '../../components/sidebarFiltros/SidebarFiltros'
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'
import banner from '../../assets/banner2!.png'
import { FaWhatsapp, FaDroplet } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'


function Home(){

  const veiculos = [
    {
      id: 1,
      marca: "Honda",
      modelo: "CG 160 Titan",
      ano: 2022,
      km: 12000,
      combustivel: "Flex",
      preco: 14500,
      imagem: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    },
    {
      id: 2,
      marca: "Yamaha",
      modelo: "Fazer 250",
      ano: 2021,
      km: 18000,
      combustivel: "Gasolina",
      preco: 18900,
      imagem: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    },
    {
      id: 3,
      marca: "Honda",
      modelo: "CB 500X",
      ano: 2023,
      km: 5000,
      combustivel: "Gasolina",
      preco: 38900,
      imagem: "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
    },
    {
      id: 4,
      marca: "BMW",
      modelo: "G 310 GS",
      ano: 2022,
      km: 8000,
      combustivel: "Gasolina",
      preco: 34900,
      imagem: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      id: 5,
      marca: "Yamaha",
      modelo: "MT-03",
      ano: 2020,
      km: 22000,
      combustivel: "Gasolina",
      preco: 23900,
      imagem: "https://images.unsplash.com/photo-1558981403-c5f9891b0f94",
    },
    {
      id: 6,
      marca: "Honda",
      modelo: "PCX 160",
      ano: 2023,
      km: 3000,
      combustivel: "Flex",
      preco: 16900,
      imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    },
  ];

  return (
    <>
      <img src={banner} alt="Banner" className="w-full h-100 object-cover" />

      <div className='flex gap-8  mt-8'>
        <SidebarFiltros />
        <div className='flex-1'>
          <div className="flex justify-center items-center mb-10">
            <input 
              type="text" 
              placeholder="Pesquise por modelo" 
              className="flex w-full max-w-lg h-10 border shadow-md p-1 border-gray-400 rounded-l-md p-3 text-lg" 
            />
            <button className="p-3 py-2 bg-red-600 rounded-r-md shadow-md text-white">
              <Search />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {veiculos.map((veiculo) => (
              <Card key={veiculo.id} className='shadow-md hover:shadow-lg transition-shadow border border-gray-100 w-90 h-110'>
                <img src={veiculo.imagem} alt={veiculo.modelo} className="w-full h-68 object-cover rounded-t-xl" />
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
                      <span className='flex items-center gap-3'> <FaHeart size={20}/><FaWhatsapp size={20} className='text-green-500'/></span>
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