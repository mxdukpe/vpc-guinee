import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-64 bg-gray-800 text-white pt-16 overflow-y-auto">
      <ul className="space-y-2 p-4">
        <li>
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/payments" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
            Paiements
          </Link>
        </li>
        <li>
          <Link to="/statistics" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
            Statistique
          </Link>
        </li>
        <li>
          <Link to="/payments-tools" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
            Paiement Outils
          </Link>
        </li>
        <li>
          <Link to="/stattriangle" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
            Stat. Triangle
          </Link>
        </li>
        <li>
          <Link to="/statnum" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
            Stat. Num Portière
          </Link>
        </li>
      </ul>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-xs text-gray-400 border-t border-gray-700">
        <p>VPC-Guinée</p>
        <p className="truncate">https://example.ecsall-guinee.com/item@example.exampleinterva/</p>
      </div>
    </nav>
  );
};

export default Sidebar;
