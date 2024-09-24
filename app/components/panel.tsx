import { useState } from 'react';

interface Mineral {
  id: number;
  nombre: string;
  descripcion: string;
  fechaRegistro: string;
}

const TrazabilidadMinerales = () => {
  const [minerales, setMinerales] = useState<Mineral[]>([
    { id: 1, nombre: 'Cobre', descripcion: 'Mineral de cobre', fechaRegistro: '2022-01-01' },
    { id: 2, nombre: 'Oro', descripcion: 'Mineral de oro', fechaRegistro: '2022-01-15' },
    { id: 3, nombre: 'Plata', descripcion: 'Mineral de plata', fechaRegistro: '2022-02-01' },
  ]);

  const [nuevoMineral, setNuevoMineral] = useState<Mineral>({
    id: 0,
    nombre: '',
    descripcion: '',
    fechaRegistro: '',
  });

  const agregarMineral = () => {
    setMinerales([...minerales, { ...nuevoMineral, id: minerales.length + 1 }]);
    setNuevoMineral({ id: 0, nombre: '', descripcion: '', fechaRegistro: '' });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900">Trazabilidad de Minerales</h1>
      <div className="flex flex-col mt-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descripción
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha Registro
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {minerales.map((mineral) => (
                    <tr key={mineral.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mineral.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mineral.nombre}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mineral.descripcion}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mineral.fechaRegistro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-bold text-gray-900">Agregar Mineral</h2>
        <div className="flex flex-col mt-2">
          <label className="text-sm font-medium text-gray-500">Nombre</label>
          <input
            type="text"
            value={nuevoMineral.nombre}
            onChange={(e) => setNuevoMineral({ ...nuevoMineral, nombre: e.target.value })}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm font-medium text-gray-500">Descripción</label>
          <input
            type="text"
            value={nuevoMineral.descripcion}
            onChange={(e) => setNuevoMineral({ ...nuevoMineral, descripcion: e.target.value })}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm font-medium text-gray-500">Fecha Registro</label>
          <input
            type="date"
            value={nuevoMineral.fechaRegistro}
            onChange={(e) => setNuevoMineral({ ...nuevoMineral, fechaRegistro: e.target.value })}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={agregarMineral}
          className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default TrazabilidadMinerales;