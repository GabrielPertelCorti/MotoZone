import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import type { ReactNode } from "react"

function PrivateRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <p>Carregando...</p>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default PrivateRoute