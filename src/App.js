import React from 'react';
import PayPalButton from './components/PayPalButton';

const products = [
  { id: 1, name: 'Cinema Night', price: '429.00', img: '19701.jpg' },
  { id: 2, name: 'Treehouse Sunset', price: '429.00', img: '19678.jpg' },
  { id: 3, name: 'Elmore Chaos', price: '399.00', img: '19705.jpg' }
];

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center py-8 px-12 border-b border-[#1A1A1A]">
        <h1 className="text-3xl font-bold tracking-tighter">TOONPAD</h1>
      </nav>

      <header className="py-24 px-10 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Precision Desk Surfaces</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">Professional-grade XL pads. Built for performance.</p>
      </header>

      <main className="max-w-6xl mx-auto px-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-[#141414] p-6 rounded-2xl border border-[#222]">
            <div className="h-48 bg-[#1A1A1A] rounded-lg mb-6 flex items-center justify-center text-gray-700">
              {p.img}
            </div>
            <h3 className="text-lg font-bold mb-1">{p.name}</h3>
            <p className="text-[#FF6B35] font-bold mb-6">R{p.price}</p>
            <PayPalButton price={p.price} productName={p.name} />
          </div>
        ))}
      </main>
    </div>
  );
}
