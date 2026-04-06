import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

function PrivateRoute({ children }: { children: JSX.Element }) {
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