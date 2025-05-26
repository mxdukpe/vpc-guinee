import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Logic for handling login can be added here
    navigate('/dashboard'); // Redirect to dashboard after login
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Logo Section */}
      <div className="w-1/5 bg-[#0c2745] flex items-start justify-center p-4">
        <img src="/logo.png" alt="Logo CR DIGITAL" className="w-32 h-auto mt-4" />
      </div>

      {/* Right Form Section */}
      <div className="w-4/5 bg-white flex flex-col items-center justify-center relative">
        <div className="absolute top-0 w-full h-24 bg-[#d7e7f7] border-b-[2px] border-[#4a1e00]" />

        <div className="z-10 w-full max-w-md px-4">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className="w-full p-4 mt-24 rounded shadow-md outline-none border border-gray-200 mb-4"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-4 rounded shadow-md outline-none border border-gray-200"
          />
          <button 
            onClick={handleLogin}
          className="mt-6 w-full bg-[#172e5c] text-white py-4 rounded shadow-md text-lg font-semibold">
            Se connecter
          </button>
          <p className="text-right text-sm mt-4 mr-1 text-black font-medium">Mot de passe oublié;</p>
        </div>

        <footer className="absolute bottom-2 text-center text-xs w-full text-black">
          Copyright © 2025, CR Digital Sarl. | For internal distribution only
        </footer>
      </div>
    </div>
  );
}
