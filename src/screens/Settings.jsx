import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Settings() {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main content */}
      <div className="flex-1 bg-white relative">
        {/* Top Bar */}
        <Header/>

        <div className="min-h-screen bg-white p-6 font-sans pt-28">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start space-x-6">
                {/* Profile Avatar */}
                <div className="bg-gray-600 rounded-full p-8">
                  <FontAwesomeIcon icon={faUser} className="w-16 h-16 text-white"/>
                  {/* <User className="w-16 h-16 text-white" /> */}
                </div>
                
                {/* Profile Information */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">User :</span>
                    <span className="text-gray-900">Tdemba</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">Rôle :</span>
                    <span className="text-gray-900">Admin</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">Téléphone :</span>
                    <span className="text-gray-900"></span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">Mail :</span>
                    <span className="text-gray-900"></span>
                  </div>
                  
                  {/* Change Password Button */}
                  <div className="pt-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      Modifier mot de passe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        Footer
        <footer className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
          Copyright © 2025, CR Digital Sort. | For internal distribution only
        </footer>
      </div>
    </div>
  );
}