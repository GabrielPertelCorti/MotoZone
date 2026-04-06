import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebase"
import { deleteDoc, doc } from "firebase/firestore"
import { useEffect } from "react"
import { getDocs } from "firebase/firestore"
import type { Veiculo } from "../../pages/home/Home"
import { updateDoc } from "firebase/firestore"

function Admin() {

  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState("")
  const [km, setKm] = useState("")
  const [preco, setPreco] = useState("")
  const [combustivel, setCombustivel] = useState("")
  const [imagens, setImagens] = useState("")
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [editandoId, setEditandoId] = useState<string | null>(null)

  async function salvarVeiculo() {
  const imagensArray = imagens.split(",")
  

  await addDoc(collection(db, "veiculos"), {
    marca,
    modelo,
    ano: Number(ano),
    km: Number(km),
    preco: Number(preco),
    combustivel,
    imagens: imagensArray
  })

  alert("Veículo cadastrado!")
}

async function deletarVeiculo(id: string) {
  await deleteDoc(doc(db, "veiculos", id))
  alert("Veículo deletado!")
  setVeiculos((prev) => prev.filter(v => v.id !== id))
}


async function atualizarVeiculo() {
  if (!editandoId) return

  const imagensArray = imagens.split(",")

  await updateDoc(doc(db, "veiculos", editandoId), {
    marca,
    modelo,
    ano: Number(ano),
    km: Number(km),
    preco: Number(preco),
    combustivel,
    imagens: imagensArray
  })

  alert("Veículo atualizado!")

  setEditandoId(null)

  setVeiculos((prev) =>
  prev.map((v) =>
    v.id === editandoId
      ? { ...v, marca, modelo, ano: Number(ano), km: Number(km), preco: Number(preco), combustivel, imagens: imagens.split(",") }
      : v
  )
)
}


useEffect(() => {
  async function buscarVeiculos() {
    const querySnapshot = await getDocs(collection(db, "veiculos"));

    const lista: Veiculo[] = [];

    querySnapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() } as Veiculo);
    });

    setVeiculos(lista);
  }

  buscarVeiculos();
}, []);


return (
  <div className="p-8 max-w-xl mx-auto">
    <h1 className="text-2xl font-bold mb-6">Cadastrar Veículo</h1>

    <div className="flex flex-col gap-3">
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Marca"
        onChange={(e) => setMarca(e.target.value)}
      />
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Modelo"
        onChange={(e) => setModelo(e.target.value)}
      />
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ano"
        onChange={(e) => setAno(e.target.value)}
      />
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="KM"
        onChange={(e) => setKm(e.target.value)}
      />
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Preço"
        onChange={(e) => setPreco(e.target.value)}
      />
      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Combustível"
        onChange={(e) => setCombustivel(e.target.value)}
      />

      <input
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Imagens (separadas por vírgula)"
        onChange={(e) => setImagens(e.target.value)}
      />

      <button
        className="bg-blue-500 w-auto text-white px-2 py-1 rounded-md"
        onClick={editandoId ? atualizarVeiculo : salvarVeiculo}
      >
        {editandoId ? "Atualizar" : "Cadastrar"}
      </button>
    </div>

    <h2 className="text-2xl font-bold my-6">Veículos cadastrados</h2>

    {veiculos.map((v) => (
      <div key={v.id} className="border p-2 mt-2">
        <p>
          {v.marca} {v.modelo} | ({v.ano}) {v.km}km
        </p>

        <button
          onClick={() => deletarVeiculo(v.id)}
          className="bg-red-500 text-white px-2 py-1 mt-2 rounded-md"
        >
          Excluir
        </button>

        <button
          onClick={() => {
            setEditandoId(v.id);
            setMarca(v.marca);
            setModelo(v.modelo);
            setAno(String(v.ano));
            setKm(String(v.km));
            setPreco(String(v.preco));
            setCombustivel(v.combustivel);
            setImagens(v.imagens.join(","));
          }}
          className="bg-blue-500 text-white px-2 py-1 mt-2 ml-2 rounded-md"
        >
          Editar
        </button>
      </div>
    ))}
  </div>
);
}

export default Admin