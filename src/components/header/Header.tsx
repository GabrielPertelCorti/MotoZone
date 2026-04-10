import { useState } from 'react'
import logo from '../../assets/nomeLogo-rm.png'
import { FaWhatsapp } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFavoritos } from '../../context/FavoritosContext'
import { Menu, X } from 'lucide-react'

function Header() {
  const { setIsSidebarOpen, favoritos } = useFavoritos();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 lg:mx-60 py-6 text-white text-xl font-semibold">
        <div>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="logo" className='w-40 md:w-60 h-auto' />
          </Link>
        </div>

        <button 
          className="md:hidden text-white outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>


        <div className="hidden md:flex">
          <ul className="flex flex-row gap-12 items-center">
            <Link to="/avaliacao"><li className="hover:text-red-500 transition cursor-pointer">Avaliação</li></Link>
            <Link to="/financiamento"><li className="hover:text-red-500 transition cursor-pointer">Financiamento</li></Link>
            <Link to="/contato"><li className="hover:text-red-500 transition cursor-pointer">Contato</li></Link>
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
            
            <div className='flex text-green-400 gap-1 items-center justify-center'>
              <a href="https://wa.me/5527996573238" target="_blank" className='flex gap-1 items-center justify-center'>
                <FaWhatsapp />
                <li className="hover:text-green-500 transition cursor-pointer">Whatsapp</li>
              </a>
            </div>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-6 gap-6 text-white text-lg font-medium">
            <li onClick={() => { navigate('/avaliacao'); setIsMenuOpen(false); }} className="hover:text-red-500 transition">Avaliação</li>
            <li onClick={() => { navigate('/financiamento'); setIsMenuOpen(false); }} className="hover:text-red-500 transition">Financiamento</li>
            <li onClick={() => { navigate('/contato'); setIsMenuOpen(false); }} className="hover:text-red-500 transition">Contato</li>
            <li 
              onClick={() => { navigate('/favoritos'); setIsMenuOpen(false); }} 
              className="hover:text-red-500 transition flex justify-between items-center"
            >
              Favoritos
              {favoritos.length > 0 && (
                <span className="bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {favoritos.length}
                </span>
              )}
            </li>
            <a 
              href="https://wa.me/5527996573238" 
              target="_blank" 
              className="flex items-center gap-2 text-green-400 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaWhatsapp size={24} />
              Whatsapp
            </a>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header