import router from './router'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { FavoritosProvider } from './context/FavoritosContext'
import { Toaster } from './components/ui/Toaster'



function App() {

  
  return (
    <div>
      <FavoritosProvider>
        <RouterProvider router={router} />
        <Toaster />
      </FavoritosProvider>
    </div>
  )
}

export default App
