import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Transactions() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Logic for handling login can be added here
    navigate('/transactions'); // Redirect to dashboard after login
  };
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main content */}
      <div className="flex-1 bg-white relative">
        {/* Top Bar */}
        <Header/>

        {/* Content */}
        <div className="pt-28 px-6">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-6 mb-6">
            <button className="bg-[#0A5B7F] text-white px-6 py-2 rounded-full text-lg">Vignette</button>
            <button className="bg-[#0A5B7F] text-white px-6 py-2 rounded-full text-lg">Num Portière</button>
            <button className="bg-[#0A5B7F] text-white px-6 py-2 rounded-full text-lg text-center">Certificat D’immatriculation</button>
            <button className="bg-[#0A5B7F] text-white px-6 py-2 rounded-full text-lg">Tout voir</button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-4">
            <input type="date" className="border rounded px-4 py-2 w-40" placeholder="Date Début" />
            <input type="date" className="border rounded px-4 py-2 w-40" placeholder="Date Fin" />
            <input type="text" className="border rounded px-4 py-2 w-40" placeholder="Chassis" />
            <input type="text" className="border rounded px-4 py-2 w-40" placeholder="Téléphone" />
            <input type="text" className="border rounded px-4 py-2 w-40" placeholder="Référence" />
            <button className="text-white bg-purple-600 px-4 py-2 rounded"><i className="fas fa-search"></i></button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <button className="bg-gray-200 px-4 py-2 rounded">Imprimer</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Visibilité des champs</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Copier</button>
            <button className="bg-gray-200 px-4 py-2 rounded">CSV</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Excel</button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">TYPE.IMMAT</th>
                  <th className="border px-4 py-2 text-left">TYPE.DOC</th>
                  <th className="border px-4 py-2 text-left">CHASSIS</th>
                  <th className="border px-4 py-2 text-left">STATUT</th>
                  <th className="border px-4 py-2 text-left">DATE</th>
                  <th className="border px-4 py-2 text-left">TÉLÉPHONE</th>
                  <th className="border px-4 py-2 text-left">RÉFÉRENCE</th>
                  <th className="border px-4 py-2 text-left">MONTANT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Portière</td>
                  <td className="border px-4 py-2">Achat</td>
                  <td className="border px-4 py-2">ABC123456789</td>
                  <td className="border px-4 py-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Payé</span></td>
                  <td className="border px-4 py-2">15/06/2023</td>
                  <td className="border px-4 py-2">621234567</td>
                  <td className="border px-4 py-2 text-blue-600 underline">REF20230615-001</td>
                  <td className="border px-4 py-2 font-bold">750 000 GNF</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Triangle</td>
                  <td className="border px-4 py-2">Achat</td>
                  <td className="border px-4 py-2">DEF987654321</td>
                  <td className="border px-4 py-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">En attente</span></td>
                  <td className="border px-4 py-2">16/06/2023</td>
                  <td className="border px-4 py-2">622345678</td>
                  <td className="border px-4 py-2 text-blue-600 underline">REF20230616-002</td>
                  <td className="border px-4 py-2 font-bold">500 000 GNF</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Portière</td>
                  <td className="border px-4 py-2">Renouvellement</td>
                  <td className="border px-4 py-2">GHI456789123</td>
                  <td className="border px-4 py-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Payé</span></td>
                  <td className="border px-4 py-2">17/06/2023</td>
                  <td className="border px-4 py-2">623456789</td>
                  <td className="border px-4 py-2 text-blue-600 underline">REF20230617-003</td>
                  <td className="border px-4 py-2 font-bold">600 000 GNF</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Portière</td>
                  <td className="border px-4 py-2">Achat</td>
                  <td className="border px-4 py-2">JKL789123456</td>
                  <td className="border px-4 py-2"><span className="bg-red-100 text-red-700 px-2 py-1 rounded">Annulé</span></td>
                  <td className="border px-4 py-2">18/06/2023</td>
                  <td className="border px-4 py-2">624567890</td>
                  <td className="border px-4 py-2 text-blue-600 underline">REF20230618-004</td>
                  <td className="border px-4 py-2 font-bold">750 000 GNF</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Triangle</td>
                  <td className="border px-4 py-2">Renouvellement</td>
                  <td className="border px-4 py-2">MNO123456789</td>
                  <td className="border px-4 py-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Payé</span></td>
                  <td className="border px-4 py-2">19/06/2023</td>
                  <td className="border px-4 py-2">625678901</td>
                  <td className="border px-4 py-2 text-blue-600 underline">REF20230619-005</td>
                  <td className="border px-4 py-2 font-bold">450 000 GNF</td>
                </tr>
              </tbody>
            </table>
            <div className="text-sm text-gray-600 mt-2">Affichage de 1 à 5 sur 7 entrées</div>
            <div className="mt-2 flex items-center justify-end gap-2">
              <button className="px-3 py-1 rounded bg-gray-100">Précédent</button>
              <button className="px-3 py-1 rounded bg-white border">1</button>
              <button className="px-3 py-1 rounded bg-gray-100">Suivant</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
          Copyright © 2025, CR Digital Sarl. | For internal distribution only
        </footer>
        <img src="/dsd.png" alt="DSD Logo" className="absolute bottom-2 right-2 h-8" />
      </div>
    </div>
  );
}
