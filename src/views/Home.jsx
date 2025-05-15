import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 ml-64 mt-16 p-6 font-sans overflow-y-auto">
          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Accueil</h2>
          </div>
        </main>
      
      </div>
    </div>
  );
};

export default Home;