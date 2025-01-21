import { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendarAlt, FaBook, FaFileAlt, FaSearch, FaWrench, FaVideo, FaChevronDown} from "react-icons/fa";

const TrazabilidadMinerales = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conocimientoAbierto, setConocimientoAbierto] = useState(false);
  const [enlaces, setEnlaces] = useState<any[]>([]); // Estado para almacenar los datos de la API
  const [loading, setLoading] = useState<boolean>(true); // Estado para mostrar el cargando

  // Realizar la solicitud a la API para obtener los datos
  useEffect(() => {
    axios
      .get("https://api.example.com/enlaces") // Reemplaza con la URL de tu API
      .then((response) => {
        console.log(response.data); // Verifica los datos que devuelve la API
        setEnlaces(response.data); // Asumimos que la API devuelve una lista de enlaces
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="flex">
      {/* Panel Lateral */}
      <aside
        className={`fixed top-0 left-0 min-h-screen bg-gray-300 text-black transform ${
          menuAbierto ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0 lg:w-60 z-50 overflow-y-auto`}
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
              <ul className="ml-6 space-y-2 mt-2">
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
      <div className="flex flex-col lg:ml-60 p-4 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Trazabilidad de Minerales
        </h1>

        {/* Cuerpo de la Página: Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Si la solicitud está cargando, mostramos un mensaje o un spinner */}
          {loading ? (
            <div className="col-span-full text-center">Cargando...</div>
          ) : (
            // Si los datos están disponibles, los mostramos
            enlaces.map((enlace) => (
              <div key={enlace.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">{enlace.titulo}</h3>
                <p className="text-sm text-gray-600">{enlace.descripcion}</p>
                <a href={enlace.url} className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">
                  Ver más
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TrazabilidadMinerales;
