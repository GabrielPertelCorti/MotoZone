import  { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Avaliacao from './pages/avaliacao/Avaliacao'
import Financiamento from './pages/financiamento/Financiamento'
import Contato from './pages/contato/Contato'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Detalhes from './pages/detalhes/Detalhes'
import Favoritos from './pages/favoritos/Favoritos'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/avaliacao",
        element: <Avaliacao />,
      },
      {
        path: "/financiamento",
        element: <Financiamento />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/favoritos",
        element: <Favoritos />,
      },
      {
        path: "/detalhes/:id",
        element: <Detalhes />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
  },
]);

export default router