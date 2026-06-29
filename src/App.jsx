// src/App.jsx
import React from 'react';

const products = [
  { id: 1, name: 'Cinema Night', price: 'R429', img: '19701.jpg' },
  { id: 2, name: 'Treehouse Sunset', price: 'R429', img: '19678.jpg' },
  { id: 3, name: 'Elmore Chaos', price: 'R399', img: '19705.jpg' }
];

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center py-6 px-10 border-b border-[#1A1A1A]">
        <h1 className="text-2xl font-bold tracking-tighter">TOONPAD</h1>
        <div className="space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-white">Collection</a>
          <a href="#" className="hover:text-white">Cart (0)</a>
        </div>
      </nav>

      <header className="py-24 px-10 text-center">
        <h2 className="text-6xl font-extrabold mb-6">Designed for the <br/><span className="text-[#FF6B35]">Modern Workspace</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">Premium, oversized desk surfaces. Engineered for precision, comfort, and unmatched aesthetic quality.</p>
        <button className="bg-[#FF6B35] px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition">View Collection</button>
      </header>

      <main className="max-w-6xl mx-auto px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-[#141414] p-5 rounded-2xl border border-[#222] hover:border-[#FF6B35] transition duration-500 group">
              <div className="h-64 bg-[#1A1A1A] rounded-xl mb-6 overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">Product Image</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-[#FF6B35] font-bold mb-6">{p.price}</p>
              <button 
                onClick={() => console.log(`Added ${p.name} to cart`)}
                className="w-full py-3 border border-[#333] rounded-xl hover:bg-[#FF6B35] transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

