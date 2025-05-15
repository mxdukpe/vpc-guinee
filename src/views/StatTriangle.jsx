import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const StatTriangle = () => {
  // Données par défaut pour le tableau
  const [tableData] = useState([
    { id: 1, nombre: 15, montant: 4500000 },
    { id: 2, nombre: 8, montant: 2400000 },
    { id: 3, nombre: 22, montant: 6600000 },
    { id: 4, nombre: 5, montant: 1500000 },
    { id: 5, nombre: 12, montant: 3600000 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrer les données en fonction de la recherche
  const filteredData = tableData.filter(item =>
    item.nombre.toString().includes(searchTerm) ||
    item.montant.toString().includes(searchTerm)
  );

  // Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 ml-64 mt-16 p-6 font-sans overflow-y-auto">
          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Statistiques des triangles</h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1 text-sm font-medium">Date Début!</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="jj/mm/aaaa" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium">Date Fin!</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="jj/mm/aaaa" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mb-6">
              <button className="bg-gray-600 text-white px-6 py-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h2 className="text-center text-xl font-medium mb-4">Statistiques des triangles</h2>
              
              <div className="flex mb-4">
                <button className="border border-gray-300 bg-white px-4 py-1 rounded-md text-sm mr-2">Imprimer</button>
                <button className="border border-gray-300 bg-white px-4 py-1 rounded-md text-sm mr-2">Visibilité des champs</button>
                <button className="border border-gray-300 bg-white px-4 py-1 rounded-md text-sm mr-2">Copier</button>
                <button className="border border-gray-300 bg-white px-4 py-1 rounded-md text-sm mr-2">CSV</button>
                <button className="border border-gray-300 bg-white px-4 py-1 rounded-md text-sm">Excel</button>
                <div className="ml-auto">
                  <div className="flex items-center">
                    <label className="mr-2 text-sm">Search:</label>
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Tableau statistiques */}
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-white">
                      <th className="py-2 px-4 text-left text-sm font-medium w-1/2">
                        Nombre
                        <span className="ml-1 inline-block">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </span>
                      </th>
                      <th className="py-2 px-4 text-right text-sm font-medium w-1/2">
                        Montant Total
                        <span className="ml-1 inline-block">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.length > 0 ? (
                      paginatedData.map((item) => (
                        <tr key={item.id} className="bg-white border-b">
                          <td className="py-2 px-4 text-center">{item.nombre}</td>
                          <td className="py-2 px-4 text-right">{item.montant.toLocaleString()} GNF</td>
                        </tr>
                      ))
                    ) : (
                      <tr className="bg-white">
                        <td colSpan="2" className="py-4 text-center text-gray-500">Aucune donnée disponible</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex justify-between items-center text-sm">
                <span>
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                  {Math.min(currentPage * itemsPerPage, totalItems)} of{' '}
                  {totalItems} entries
                </span>
                <div className="flex space-x-2 items-center">
                  <button 
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 ${currentPage === 1 ? 'text-gray-400 cursor-default' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    Previous
                  </button>
                  <span className="bg-gray-300 px-2 py-1 rounded">{currentPage}</span>
                  <button 
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 ${currentPage === totalPages ? 'text-gray-400 cursor-default' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StatTriangle;