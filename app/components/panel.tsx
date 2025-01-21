import { useState } from "react";
import {
  FaCalendarAlt,
  FaBook,
  FaFileAlt,
  FaSearch,
  FaWrench,
  FaVideo,
  FaChevronDown,
  FaCrown,
  FaBroadcastTower,
  FaTools, 
  FaWallet 
} from "react-icons/fa";

const TrazabilidadMinerales = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conocimientoAbierto, setConocimientoAbierto] = useState(false);

  // Array de enlaces para las tarjetas
  const enlaces = [
    {
      id: 1,
      titulo: "Introducción a Web3",
      descripcion:
        "Aprende sobre los conceptos básicos de Web3, sus aplicaciones y cómo está cambiando la web.",
      url: "https://www.coindesk.com/learn/what-is-web3/",
      youtubeVideoId: "N_Dwhubt9Bk",
    },
    {
      id: 2,
      titulo: "Blockchain y Web3",
      descripcion:
        "Descubre cómo la tecnología blockchain es la base de Web3 y cómo permite la descentralización.",
      url: "https://www.ibm.com/topics/what-is-blockchain",
      youtubeVideoId: "SSo_EIwHSd4",
    },
    {
      id: 3,
      titulo: "Ethereum y Smart Contracts",
      descripcion:
        "Explora Ethereum y su uso para crear contratos inteligentes que automatizan procesos.",
      url: "https://ethereum.org/en/developers/docs/smart-contracts/",
      youtubeVideoId: "GXfwABded7g",
    },
    {
      id: 4,
      titulo: "NFTs: Tokens No Fungibles",
      descripcion:
        "Conoce qué son los NFTs, cómo funcionan y su impacto en la industria del arte y coleccionismo.",
      url: "https://www.nftgamefreak.com/what-are-nfts/",
      youtubeVideoId: "vluFUSMMHu4",
    },
    {
      id: 5,
      titulo: "DAOs: Organizaciones Autónomas Descentralizadas",
      descripcion:
        "Entiende cómo las DAOs permiten tomar decisiones de manera descentralizada mediante contratos inteligentes.",
      url: "https://www.coindesk.com/learn/what-is-a-dao-decentralized-autonomous-organization",
      youtubeVideoId: "NDdBDevKyOQ",
    },
    {
      id: 6,
      titulo: "Wallets de Criptomonedas",
      descripcion:
        "Aprende a usar carteras digitales (wallets) para almacenar y gestionar tus activos en Web3.",
      url: "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet",
      youtubeVideoId: "KtLvVtNazkY",
    },
    {
      id: 7,
      titulo: "DeFi: Finanzas Descentralizadas",
      descripcion:
        "Explora el mundo de las finanzas descentralizadas (DeFi) y cómo se están revolucionando las finanzas tradicionales.",
      url: "https://www.defipulse.com/",
      youtubeVideoId: "fYGutx4W7Ys",
    },
    {
      id: 8,
      titulo: "Interoperabilidad en Web3",
      descripcion:
        "Comprende cómo diferentes blockchains pueden trabajar juntas de manera fluida a través de la interoperabilidad.",
      url: "https://www.coindesk.com/learn/interoperability-in-blockchain",
      youtubeVideoId: "AIU5K5l-GLU",
    },
    {
      id: 9,
      titulo: "El Futuro de Web3",
      descripcion:
        "¿Qué nos depara el futuro de Web3 y cómo afectará a nuestra interacción con Internet?",
      url: "https://www.forbes.com/sites/forbestechcouncil/2021/06/08/web3-the-future-of-the-internet/",
      youtubeVideoId: "P30UQ9cEYNE",
    },
    {
      id: 10,
      titulo: "Web3 y la Privacidad del Usuario",
      descripcion:
        "Descubre cómo Web3 puede ofrecer una mayor privacidad y control sobre los datos personales.",
      url: "https://www.coindesk.com/learn/what-is-web3-and-why-it-matters-to-your-privacy/",
      youtubeVideoId: "n6i3gJd01lk",
    },
  ];

  return (
    <div className="flex">
      {/* Panel Lateral */}
      <aside
        className={`fixed top-0 left-0 min-h-screen bg-gray-100 text-black transform ${
          menuAbierto ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0 lg:w-80 z-50 overflow-y-auto`}
      >
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="p-4 text-black lg:hidden"
        >
          {menuAbierto ? "Cerrar Menú" : "Abrir Menú"}
        </button>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="flex items-center space-x-2">
            <FaCalendarAlt />
            <span>Eventos</span>
          </li>

          {/* Conocimiento con Dropdown */}
          <li className="flex flex-col items-start space-x-2">
            <button
              onClick={() => setConocimientoAbierto(!conocimientoAbierto)}
              className="flex items-center space-x-2"
            >
              <FaBook />
              <span>Recursos Web3</span>
              <span
                className={`ml-2 transform transition-transform ${
                  conocimientoAbierto ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown />
              </span>
            </button>
            {conocimientoAbierto && (
              <ul className="ml-6 space-y-3 mt-3">
                <li className="flex items-center space-x-2">
                  <FaFileAlt />
                  <span>Casos de Uso</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaSearch />
                  <span>Investigaciones</span>
                  <FaCrown className="text-yellow-500" title="Recurso de pago" />
                </li>
                <li className="flex items-center space-x-2">
                  <FaWrench />
                  <span>Guías Técnicas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaVideo />
                  <span>Videos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaWallet/>
                  <span>Wallet</span>
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center space-x-2">
            <FaBroadcastTower />
            <span>Webinars</span>
            <FaCrown className="text-yellow-500" title="Recurso de pago" />
          </li>
          <li className="flex items-center space-x-2">
            <FaTools />
            <span>Herramientas</span>
          </li>
        </ul>
      </aside>

      {/* Contenido Principal */}
      <div className="flex flex-col lg:ml-20 p-4 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Videos</h1>

        {/* Cuerpo de la Página: Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mapeo de tarjetas */}
          {enlaces.map((enlace) => (
            <div key={enlace.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">
                {enlace.titulo}
              </h3>
              <p className="text-sm text-gray-600">{enlace.descripcion}</p>
              {/* <a href={enlace.url} className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">Ver más</a> */}
              {/* Si hay un video de YouTube, mostrar la miniatura */}
              {enlace.youtubeVideoId && (
                <div className="mt-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${enlace.youtubeVideoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${enlace.youtubeVideoId}/hqdefault.jpg`}
                      alt={`Miniatura del video ${enlace.youtubeVideoId}`}
                      className="w-full rounded-lg"
                    />
                  </a>
                  <p className="text-sm text-center mt-2">
                    <a
                      href={`https://www.youtube.com/watch?v=${enlace.youtubeVideoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    ></a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrazabilidadMinerales;
