import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const PaymentHistory = () => {
  const paymentsData = [
    { code: "---", amount: "800,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "SB1KZ28E0BG5S9A4", status: "Success", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "---", amount: "1,000,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "WF0LXX8DYUV53A321", status: "Annulée", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "---", amount: "1,000,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "WF0LXX8DYUV53A321", status: "Annulée", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "---", amount: "0 GNF", commission: "0 GNF", type: "achat", docType: "Autorisation", chassis: "MD6M1APAN4F09B93", status: "Success", date: "17-03-2025", vignette: "---", category: "Urbain de perr." },
    { code: "---", amount: "1,000,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "Usage personnel", status: "Success", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "---", amount: "1,000,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "2TZZ7ADXJNC309248", status: "Success", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "---", amount: "1,000,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "2TZZ7ADXJNC309248", status: "Success", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "---", amount: "500,000 GNF", commission: "20,000 GNF", type: "achat", docType: "Mutation de propriété", chassis: "BWEE4AC7CH333779", status: "Success", date: "17-03-2025", vignette: "---", category: "---" },
    { code: "Camions", amount: "1,300,000 GNF", commission: "30,000 GNF", type: "Immatriculation", docType: "Certificat", chassis: "Usage personnel", status: "Success", date: "17-03-2025", vignette: "20200101-AI-00", category: "---" }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 ml-64 mt-16 p-6 font-sans overflow-y-auto">
          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Historique des paiements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <input type="date" className="border p-2 rounded w-full" placeholder="Date de début" />
              <input type="date" className="border p-2 rounded w-full" placeholder="Date de fin" />
              <input type="text" className="border p-2 rounded w-full" placeholder="Châssis" />
              <input type="text" className="border p-2 rounded w-full" placeholder="Téléphone" />
              <input type="text" className="border p-2 rounded w-full" placeholder="Référence" />
            </div>

            <div className="overflow-x-auto bg-white rounded shadow">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-2 px-4 text-left">Code</th>
                    <th className="py-2 px-4 text-left">Montant</th>
                    <th className="py-2 px-4 text-left">Commission</th>
                    <th className="py-2 px-4 text-left">Type</th>
                    <th className="py-2 px-4 text-left">Mode</th>
                    <th className="py-2 px-4 text-left">Châssis</th>
                    <th className="py-2 px-4 text-left">Statut</th>
                    <th className="py-2 px-4 text-left">Date</th>
                    <th className="py-2 px-4 text-left">Vignette</th>
                    <th className="py-2 px-4 text-left">Catégorie</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentsData.map((payment, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2 px-4">{payment.code}</td>
                      <td className="py-2 px-4">{payment.amount}</td>
                      <td className="py-2 px-4">{payment.commission}</td>
                      <td className="py-2 px-4">{payment.type}</td>
                      <td className="py-2 px-4">{payment.docType}</td>
                      <td className="py-2 px-4">{payment.chassis}</td>
                      <td className="py-2 px-4">{payment.status}</td>
                      <td className="py-2 px-4">{payment.date}</td>
                      <td className="py-2 px-4">{payment.vignette}</td>
                      <td className="py-2 px-4">{payment.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6 text-sm">
              <p>Affichage de 1 à 9 sur 9 entrées</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded">Préc.</button>
                {[1].map((page) => (
                  <button key={page} className="px-3 py-1 border rounded bg-blue-600 text-white">{page}</button>
                ))}
                <button className="px-3 py-1 border rounded">Suiv.</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentHistory;
