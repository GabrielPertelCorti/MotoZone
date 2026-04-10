import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

type FavoritosContextType = {
  favoritos: string[]
  setFavoritos: React.Dispatch<React.SetStateAction<string[]>>
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
  toggleFavorito: (id: string) => void
}

const FavoritosContext = createContext({} as FavoritosContextType)

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const saved = localStorage.getItem("@loja-motos:favoritos")
    return saved ? JSON.parse(saved) : []
  })
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("@loja-motos:favoritos", JSON.stringify(favoritos))
  }, [favoritos])

  const toggleFavorito = (id: string) => {
    setFavoritos((prev) => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    )
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos, isSidebarOpen, setIsSidebarOpen, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritos() {
  const context = useContext(FavoritosContext)
  if (!context) throw new Error("useFavoritos deve ser usado dentro de um FavoritosProvider")
  return context
}