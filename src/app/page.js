'use client';

import WebsiteInput from './components/websiteInput';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#7F664F] to-[#A4AD89] text-transparent bg-clip-text">
        Verify Websites with Web3
      </h1>
      <div className="glass-morphism p-6">
        <WebsiteInput />
      </div>
    </main>
  );
}