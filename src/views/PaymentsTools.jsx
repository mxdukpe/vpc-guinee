import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const PaymentsTools = () => {
  // Données par défaut pour le tableau
  const [tableData] = useState([
    {
      id: 1,
      typeImmat: 'Portière',
      typeDoc: 'Achat',
      chassis: 'ABC123456789',
      statut: 'Payé',
      date: '15/06/2023',
      telephone: '621234567',
      reference: 'REF20230615-001',
      montant: '750 000 GNF'
    },
    {
      id: 2,
      typeImmat: 'Triangle',
      typeDoc: 'Achat',
      chassis: 'DEF987654321',
      statut: 'En attente',
      date: '16/06/2023',
      telephone: '622345678',
      reference: 'REF20230616-002',
      montant: '500 000 GNF'
    },
    {
      id: 3,
      typeImmat: 'Portière',
      typeDoc: 'Renouvellement',
      chassis: 'GHI456789123',
      statut: 'Payé',
      date: '17/06/2023',
      telephone: '623456789',
      reference: 'REF20230617-003',
      montant: '600 000 GNF'
    },
    {
      id: 4,
      typeImmat: 'Portière',
      typeDoc: 'Achat',
      chassis: 'JKL789123456',
      statut: 'Annulé',
      date: '18/06/2023',
      telephone: '624567890',
      reference: 'REF20230618-004',
      montant: '750 000 GNF'
    },
    {
      id: 5,
      typeImmat: 'Triangle',
      typeDoc: 'Renouvellement',
      chassis: 'MNO123456789',
      statut: 'Payé',
      date: '19/06/2023',
      telephone: '625678901',
      reference: 'REF20230619-005',
      montant: '450 000 GNF'
    },
    {
      id: 6,
      typeImmat: 'Portière',
      typeDoc: 'Achat',
      chassis: 'PQR987654321',
      statut: 'Payé',
      date: '20/06/2023',
      telephone: '626789012',
      reference: 'REF20230620-006',
      montant: '800 000 GNF'
    },
    {
      id: 7,
      typeImmat: 'Triangle',
      typeDoc: 'Achat',
      chassis: 'STU456789123',
      statut: 'En attente',
      date: '21/06/2023',
      telephone: '627890123',
      reference: 'REF20230621-007',
      montant: '500 000 GNF'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrer les données en fonction de la recherche
  const filteredData = tableData.filter(item =>
    Object.values(item).some(
      val => typeof val === 'string' && 
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
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
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Outils des paiements</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              {['Date Début', 'Date Fin'].map((label, index) => (
                <div key={index}>
                  <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
                  <div className="relative">
                    <input type="text" placeholder="jj/mm/aaaa" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}

              {['Chassis', 'Téléphone', 'Référence'].map((label, index) => (
                <div key={index}>
                  <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
                  <input 
                    type="text" 
                    placeholder={label} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600" 
                    onChange={(e) => {
                      if (label === 'Chassis') {
                        // Filtre spécifique pour le chassis
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button className="flex items-center text-sm text-purple-700 font-medium hover:underline">
                <span className="text-green-700 mr-1 text-lg font-bold">+</span>Achat de numéro de portière
              </button>
              <button className="flex items-center text-sm text-purple-700 font-medium hover:underline">
                <span className="text-green-700 mr-1 text-lg font-bold">+</span>Achat triangle
              </button>
              <div className="ml-auto">
                <button 
                  className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md"
                  onClick={() => {
                    // Action de recherche
                    setCurrentPage(1);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {['Imprimer', 'Visibilité des champs', 'Copier', 'CSV', 'Excel'].map((btn, index) => (
                <button 
                  key={index} 
                  className="border border-gray-300 px-4 py-1 rounded-md text-sm bg-white hover:bg-gray-100 shadow-sm"
                >
                  {btn}
                </button>
              ))}
              <div className="ml-auto">
                <input 
                  type="text" 
                  placeholder="Search:" 
                  className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm" 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-md mb-4">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100 text-gray-600 uppercase tracking-wider">
                  <tr>
                    {["Type.Immat", "Type.Doc", "Chassis", "Statut", "Date", "Téléphone", "Référence", "Montant"].map((head, index) => (
                      <th key={index} className="px-4 py-3 font-medium">
                        <div className="flex items-center">
                          {head}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">{item.typeImmat}</td>
                        <td className="px-4 py-3">{item.typeDoc}</td>
                        <td className="px-4 py-3 font-medium">{item.chassis}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.statut === 'Payé' ? 'bg-green-100 text-green-800' :
                            item.statut === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {item.statut}
                          </span>
                        </td>
                        <td className="px-4 py-3">{item.date}</td>
                        <td className="px-4 py-3">{item.telephone}</td>
                        <td className="px-4 py-3 text-purple-600 font-medium">{item.reference}</td>
                        <td className="px-4 py-3 font-bold">{item.montant}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
                        Aucune donnée disponible
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="text-gray-600 mb-2 md:mb-0">
                Affichage de {(currentPage - 1) * itemsPerPage + 1} à{' '}
                {Math.min(currentPage * itemsPerPage, totalItems)} sur{' '}
                {totalItems} entrées
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  Précédent
                </button>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md">
                  {currentPage}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentsTools;