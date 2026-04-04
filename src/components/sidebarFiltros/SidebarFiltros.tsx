import { useState } from "react"
import "./SidebarFiltros.css"

function SidebarFiltros() {
  const [marca, setMarca] = useState("")
  const [preco, setPreco] = useState(50000)
  const [km, setKm] = useState(20000)
  const [ano, setAno] = useState(2022)

  return (
    <aside className="w-72 bg-white border-r p-5 sticky top-22 self-start max-h-[calc(100vh-2rem)] overflow-y-auto mt-4">
      
      <h2 className="text-xl font-bold mb-6">Filtrar Resultado</h2>

      <div className="mb-6">
        <p className="font-semibold mb-2">Marca</p>
        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          className="w-full border p-2 rounded-md"
        >
          <option value="">Todas</option>
          <option value="honda">Honda</option>
          <option value="yamaha">Yamaha</option>
          <option value="bmw">BMW</option>
        </select>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">Preço até</p>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1">R$ {preco.toLocaleString()}</p>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">KM até</p>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={km}
          onChange={(e) => setKm(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1">{km.toLocaleString()} km</p>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">Ano mínimo</p>
        <input
          type="range"
          min="2000"
          max="2025"
          step="1"
          value={ano}
          onChange={(e) => setAno(Number(e.target.value))}
          className="w-full custom-range"
        />
        <p className="text-sm mt-1 color">{ano}</p>
      </div>

      <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
        Aplicar Filtros
      </button>
    </aside>
  );
}

export default SidebarFiltros