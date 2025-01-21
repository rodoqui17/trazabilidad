import { useState } from "react";
import { FaCalendarAlt, FaBook, FaFileAlt, FaSearch, FaWrench, FaVideo, FaChevronDown} from "react-icons/fa";

const TrazabilidadMinerales = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conocimientoAbierto, setConocimientoAbierto] = useState(false);

  // Array de enlaces para las tarjetas
  const enlaces = [
    { id: 1, titulo: "Enlace 1", descripcion: "Descripción breve del enlace 1", url: "#" },
    { id: 2, titulo: "Enlace 2", descripcion: "Descripción breve del enlace 2", url: "#" },
    { id: 3, titulo: "Enlace 3", descripcion: "Descripción breve del enlace 3", url: "#" },
    { id: 4, titulo: "Enlace 4", descripcion: "Descripción breve del enlace 4", url: "#" },
    { id: 5, titulo: "Enlace 5", descripcion: "Descripción breve del enlace 5", url: "#" },
    { id: 6, titulo: "Enlace 6", descripcion: "Descripción breve del enlace 6", url: "#" },
    { id: 7, titulo: "Enlace 7", descripcion: "Descripción breve del enlace 7", url: "#" },
    { id: 8, titulo: "Enlace 8", descripcion: "Descripción breve del enlace 8", url: "#" },
    { id: 9, titulo: "Enlace 9", descripcion: "Descripción breve del enlace 9", url: "#" },
    { id: 10, titulo: "Enlace 10", descripcion: "Descripción breve del enlace 10", url: "#" },
    { id: 11, titulo: "Enlace 11", descripcion: "Descripción breve del enlace 11", url: "#" },
    { id: 12, titulo: "Enlace 12", descripcion: "Descripción breve del enlace 12", url: "#" },
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
              <span>Conocimiento</span>
              <span className={`ml-2 transform transition-transform ${conocimientoAbierto ? 'rotate-180' : ''}`}>
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
                </li>
                <li className="flex items-center space-x-2">
                  <FaWrench />
                  <span>Guías Técnicas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaVideo />
                  <span>Videos</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      {/* Contenido Principal */}
      <div className="flex flex-col lg:ml-20 p-4 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Casos de uso
        </h1>

        {/* Cuerpo de la Página: Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mapeo de tarjetas */}
          {enlaces.map((enlace) => (
            <div key={enlace.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">{enlace.titulo}</h3>
              <p className="text-sm text-gray-600">{enlace.descripcion}</p>
              <a href={enlace.url} className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">Ver más</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrazabilidadMinerales;
