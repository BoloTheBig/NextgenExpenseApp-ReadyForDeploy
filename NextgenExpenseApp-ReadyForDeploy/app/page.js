'use client';
import { useState } from 'react';
import jsPDF from 'jspdf';

export default function HomePage() {
  const [expenses] = useState([
    { id: 1, description: 'Café client', amount: 4.5, date: '2025-08-01' },
    { id: 2, description: 'Déjeuner équipe', amount: 78.2, date: '2025-08-02' },
    { id: 3, description: 'Taxi', amount: 23.4, date: '2025-08-03' },
    { id: 4, description: 'Abonnement cloud', amount: 12.99, date: '2025-08-04' },
    { id: 5, description: 'Station-service', amount: 46.0, date: '2025-08-05' }
  ]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Liste des dépenses', 10, 14);
    doc.setFontSize(11);
    expenses.forEach((exp, i) => {
      doc.text(`${exp.date} — ${exp.description} : ${exp.amount} €`, 10, 24 + i * 8);
    });
    doc.save('expenses.pdf');
  };

  const total = expenses.reduce((s, e) => s + e.amount, 0);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Mes dépenses (données de test)</h2>
      <div className="mb-4 p-4 border rounded bg-white shadow-sm">
        <div className="flex justify-between">
          <div>Total</div>
          <div className="font-bold">{total.toFixed(2)} €</div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border">Date</th>
            <th className="text-left p-2 border">Description</th>
            <th className="text-right p-2 border">Montant (€)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id} className="odd:bg-white even:bg-gray-50">
              <td className="p-2 border">{exp.date}</td>
              <td className="p-2 border">{exp.description}</td>
              <td className="p-2 border text-right">{exp.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-2">
        <button onClick={downloadPDF} className="bg-blue-600 text-white px-4 py-2 rounded">Exporter en PDF</button>
      </div>
    </div>
  );
}
