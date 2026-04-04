import logo from '../../assets/nomeLogo-rm.png'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="flex justify-between items-center mx-60 py-6 text-white text-xl font-semibold">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className='w-60 h-10' />
          </Link>
        </div>
        <div className="flex">
          <ul className="flex flex-row gap-12">

            <Link to="/avaliacao">
              <li>Avaliação</li>
            </Link>

            <Link to="/financiamento">
              <li>Financiamento</li>
            </Link>

            <Link to="/contato">
              <li>Contato</li>
            </Link>

            <li>Favoritos</li>
            
            <div className='flex text-green-400 gap-1 items-center'>
              <a href="https://wa.me/5527996573238" target="_blank" className='flex gap-1 items-center'>
                <FaWhatsapp />
                <li>Whatsapp</li>
              </a>
            </div>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header