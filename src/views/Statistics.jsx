// src/components/Statistics.js
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import agents from '../views/data'; // Assuming you have a data.js file exporting the agents array

const Statistics = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-64 mt-16 p-6 font-sans overflow-y-auto">
          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Statistiques des transactions</h2>
            <div className="flex gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date Début!</label>
                <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date Fin!</label>
                <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div className="flex items-end">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md">🔍</button>
              </div>
            </div>

            <div className="mb-4">
              <button className="bg-gray-200 px-3 py-1 rounded mr-2">Imprimer</button>
              <button className="bg-gray-200 px-3 py-1 rounded mr-2">Visibilité des champs</button>
              <button className="bg-gray-200 px-3 py-1 rounded mr-2">Copier</button>
              <button className="bg-gray-200 px-3 py-1 rounded mr-2">CSV</button>
              <button className="bg-gray-200 px-3 py-1 rounded">Excel</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-4 py-2 border">Agent</th>
                    <th className="px-4 py-2 border">E-mail</th>
                    <th className="px-4 py-2 border">Téléphone</th>
                    <th className="px-4 py-2 border">Nombre de transaction</th>
                    <th className="px-4 py-2 border">Montant</th>
                  </tr>
                </thead>
                <tbody>
                {agents.map((agent, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{agent.name}</td>
                    <td className="py-2 px-4">↑+</td>
                    <td className="py-2 px-4">{agent.email}</td>
                    <td className="py-2 px-4">{agent.phone}</td>
                    <td className="py-2 px-4">{agent.transactions}</td>
                    <td className="py-2 px-4">{agent.amount}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm">Showing 1 to 10 of 10 entries</div>
              <div className="flex gap-2">
                <button className="bg-gray-200 px-3 py-1 rounded">Previous</button>
                <button className="bg-gray-200 px-3 py-1 rounded">1</button>
                <button className="bg-gray-200 px-3 py-1 rounded">Next</button>
              </div>
            </div>

            <div className="mt-2 text-green-600 font-semibold">
              Montant Total : 244,500,000 GNF
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Statistics;
