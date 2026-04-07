import logo from '../../assets/nomeLogo-rm.png'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFavoritos } from '../../context/FavoritosContext'


function Header() {
  // const { favoritos } = useFavoritos()
  const { setIsSidebarOpen, favoritos } = useFavoritos();
  
  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="flex justify-between items-center mx-60 py-6 text-white text-xl font-semibold">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className='w-60 h-10' />
          </Link>
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-12 items-center">

            <Link to="/avaliacao">
              <li className="hover:text-red-500 transition cursor-pointer">Avaliação</li>
            </Link>

            <Link to="/financiamento">
              <li className="hover:text-red-500 transition cursor-pointer">Financiamento</li>
            </Link>

            <Link to="/contato">
              <li className="hover:text-red-500 transition cursor-pointer">Contato</li>
            </Link>

            <li 
              className="hover:text-red-500 transition cursor-pointer flex items-center gap-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              Favoritos
              {favoritos.length > 0 && (
                <span className="bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritos.length}
                </span>
              )}
            </li>
            
            <div className='flex text-green-400 gap-1 items-center'>
              <a href="https://wa.me/5527996573238" target="_blank" className='flex gap-1 items-center justify-center'>
                <FaWhatsapp />
                <li className="hover:text-green-500 transition cursor-pointer">Whatsapp</li>
              </a>
            </div>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header