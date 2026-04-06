import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="font-semibold text-lg mb-3">Atendimento</h3>
          <p className="text-gray-600">(27) 99999-9999</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Menu</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Avaliação</li>
            <li className="hover:text-black cursor-pointer">Financiamento</li>
            <li className="hover:text-black cursor-pointer">Contato</li>
            <li className="hover:text-black cursor-pointer">Quem somos</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Redes sociais</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="bg-gray-800 text-white text-sm py-3 px-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span>🔍 Busca</span>
          <span>📩 Contato</span>
          <span>📱 (27) 99999-9999</span>
        </div>

        <p>
          Desenvolvido por <span className="text-red-500">Pertel's Team</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer