import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavDashboard = () => {
    // Logic for handling login can be added here
    navigate('/dashboard'); // Redirect to dashboard after login
  };
  const handleNavTransactions = () => {
    // Logic for handling login can be added here
    navigate('/transactions'); // Redirect to transactions after login
  };
  const handleNavReversement = () => {
    // Logic for handling login can be added here
    navigate('/financial-stats'); // Redirect to reversement after login
  };
  const handleNavSettings = () => {
    // Logic for handling login can be added here
    navigate('/settings'); // Redirect to settings after login
  };
  return (
      <div className="w-64 bg-[#0A2342] text-white flex flex-col justify-between">
        {/* Sidebar */}
        <div>
          <div className="p-6">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>
          <nav className="flex flex-col space-y-4 px-4">

            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `py-3 rounded text-left px-4 transition-colors duration-200 ${
                  isActive ? 'bg-[#C54F1E]' : 'bg-[#13698D] hover:bg-[#C54F1E]'
                }`
              }
            >
              Tableaux de Bord
            </NavLink>

            <NavLink
              to="/transactions"
              className={({ isActive }) => 
                `py-3 rounded text-left px-4 transition-colors duration-200 ${
                  isActive ? 'bg-[#C54F1E]' : 'bg-[#13698D] hover:bg-[#C54F1E]'
                }`
              }
            >
              Transactions
            </NavLink>

            <NavLink
              to="/financial-stats"
              className={({ isActive }) => 
                `py-3 rounded text-left px-4 transition-colors duration-200 ${
                  isActive ? 'bg-[#C54F1E]' : 'bg-[#13698D] hover:bg-[#C54F1E]'
                }`
              }
            >
              Statistiques Financières
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) => 
                `py-3 rounded text-left px-4 transition-colors duration-200 ${
                  isActive ? 'bg-[#C54F1E]' : 'bg-[#13698D] hover:bg-[#C54F1E]'
                }`
              }
            >
              Paramètres
            </NavLink>
          </nav>
        </div>
        <button className="bg-[#13698D] hover:bg-[#C54F1E] py-3 m-4 rounded px-4">Déconnexion</button>
      </div>
  );
};

export default Sidebar;
