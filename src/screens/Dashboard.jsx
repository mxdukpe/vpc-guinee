import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


export default function DashBoard() {
  const navigate = useNavigate();
  const handleNavigation = () => {
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

        {/* Filters and Content */}
        <div className="pt-28 px-6">
          <div className="flex space-x-4 mb-6">
            <div>
              <label className="block text-sm font-medium">Date Début</label>
              <input type="date" className="border rounded px-2 py-1 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Date Fin</label>
              <input type="date" className="border rounded px-2 py-1 mt-1" />
            </div>
          </div>

          <div className="flex space-x-4 mb-4 font-medium">
            <span>Mois</span>
            <span>Année</span>
            <span>hier</span>
            <span>semaine</span>
          </div>

          <div className="flex space-x-4 mb-10">
            {['Num Portière', 'Vignette', "Certificat D’immatriculation", 'Tout voir'].map((label, index) => (
              <button
                key={index}
                className="bg-[#14678e] text-white px-6 py-2 rounded-full text-sm font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-20">Répartition par canaux</h1>

          <footer className="absolute bottom-2 w-full text-center text-xs text-black">
            Copyright © 2025, CR Digital Sarl. | For internal distribution only
          </footer>

          <img
            src="/dsd.png"
            alt="Logo DSD"
            className="absolute bottom-0 right-2 w-20 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
