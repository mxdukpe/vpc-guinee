import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function FinancialStats() {
  const navigate = useNavigate();
  
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
          {/* Title */}
          {/* <h1 className="text-2xl font-bold mb-6">Tableaux de Bord</h1> */}

          {/* Navigation buttons */}
          {/* <div className="flex gap-6 mb-6">
            <button className="bg-[#0A5B7F] text-white px-6 py-2 rounded-full text-lg">Transactions</button>
            <button className="bg-[#0A5B7F] text-white px-6 py-2 rounded-full text-lg">Paramètres</button>
          </div> */}

          {/* Submenu */}
          {/* <div className="flex gap-6 mb-8 pl-4">
            <Link to="#" className="text-[#0A5B7F]">Statistiques Financières</Link>
            <Link to="#" className="text-[#0A5B7F]">Déconnexion</Link>
          </div> */}

          <hr className="mb-6 border-gray-300"/>

          {/* Date filters */}
          <div className="flex gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-1">Date Début</label>
              <input type="text" className="border rounded px-4 py-2 w-40" placeholder="jj/mm/aaaa" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Date Fin</label>
              <input type="text" className="border rounded px-4 py-2 w-40" placeholder="jj/mm/aaaa" />
            </div>
            <button className="text-white bg-[#0A5B7F] px-4 py-2 rounded h-10 mt-5">cash</button>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="border rounded p-4">
              <h3 className="font-bold mb-2">Montant Total collecté :</h3>
              <p className="text-xl">5 000 000 XAF</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-bold mb-2">Nombre de transactions initiées :</h3>
              <p className="text-xl">15</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-bold mb-2">Nombre transactions complétées :</h3>
              <p className="text-xl">130</p>
            </div>
          </div>

          {/* Balance */}
          <div className="border rounded p-4 mb-8 w-1/3">
            <h3 className="font-bold mb-2">Balance :</h3>
            <p className="text-xl">20 000 000 XAF</p>
          </div>

          {/* Reversements history */}
          <div>
            <h3 className="font-bold mb-2">Historique des reversements</h3>
            {/* Table would go here */}
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
          Copyright © 2025, CR Digital Sort. | For internal distribution only
        </footer>
      </div>
    </div>
  );
}