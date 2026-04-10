import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { useFavoritos } from "../../context/FavoritosContext";

type Veiculo = {
  id: string,
  marca: string,
  modelo: string,
  ano: number,
  km: number,
  preco: number,
  combustivel: string,
  imagens: string[]
}

type Props = {
  veiculos: Veiculo[]
}

function SidebarFavoritos({ veiculos }: Props){
  const { favoritos, isSidebarOpen, setIsSidebarOpen } = useFavoritos();
  const favoritosFiltrados = veiculos.filter((veiculo) => favoritos.includes(veiculo.id))

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetContent side="right" className="w-80 z-[100] flex flex-col h-full">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Meus Favoritos</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto mt-4 pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
          {favoritosFiltrados.length > 0 ? (
            favoritosFiltrados.map((veiculo) => (
              <div key={veiculo.id} className="border-b pb-2">
                {/* <img
                  src={veiculo.imagens[0]}
                  alt={veiculo.modelo}
                  className="w-full h-24 object-cover rounded"
                /> */}
                <div className="w-full h-32 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={veiculo.imagens[0]}
                    alt={veiculo.modelo}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-bold mt-2 text-sm ml-2">
                  {veiculo.marca} {veiculo.modelo}
                </p>
                <p className="text-red-600 font-bold text-sm ml-2">R$ {veiculo.preco.toLocaleString()}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <p>Nenhum favorito ainda</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarFavoritos