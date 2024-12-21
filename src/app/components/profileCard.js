import { motion } from 'framer-motion';
import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import { ArrowUpDown, Shield, Award, Star } from 'lucide-react';
import Image from 'next/image';
import PriceChart from './priceChart';

export default function ProfileCard() {
  const { connected, publicKey } = useWallet();
  const address = connected ? publicKey.toString() : '';
  const [swapAmount, setSwapAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('USDC');
  
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <motion.div
        className="glass-morphism p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Profile Image & Basic Info */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={`https://robohash.org/${address}.png`}
              className="w-32 h-32 rounded-full ring-4 ring-primary p-1 bg-primary"
              alt="Profile"
              width={128}
              height={128}
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#7F664F]">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </h2>
              <button className="text-[#A4AD89] text-sm hover:text-[#7F664F]">
                Copy Address
              </button>
            </div>
          </div>

          {/* Right Column - Detailed Stats */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-morphism p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="text-[#7F664F]" />
                <h3 className="text-lg font-semibold text-[#7F664F]">Trust Score</h3>
              </div>
              <p className="text-3xl font-bold text-[#7F664F]">98/100</p>
              <p className="text-[#A4AD89]">Top 5% of verifiers</p>
            </div>

            <div className="glass-morphism p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Award className="text-[#7F664F]" />
                <h3 className="text-lg font-semibold text-[#7F664F]">Contributions</h3>
              </div>
              <p className="text-3xl font-bold text-[#7F664F]">156</p>
              <p className="text-[#A4AD89]">Websites verified</p>
            </div>

            <div className="glass-morphism p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Star className="text-[#7F664F]" />
                <h3 className="text-lg font-semibold text-[#7F664F]">SKEM Balance</h3>
              </div>
              <p className="text-3xl font-bold text-[#7F664F]">2,450</p>
              <p className="text-[#A4AD89]">≈ $245.00 USD</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Token Swap Section */}
      <motion.div
        className="glass-morphism p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-[#7F664F] mb-6">Swap Tokens</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Swap Interface */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="glass-morphism p-4">
                <label className="text-sm text-[#7F664F] mb-2 block">From</label>
                <div className="flex gap-4">
                  <select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    className="bg-[#FCF4D7] text-[#7F664F] p-3 rounded-lg border border-[#A4AD89] focus:ring-2 focus:ring-[#7F664F] w-1/3"
                  >
                    <option>USDC</option>
                    <option>USDT</option>
                  </select>
                  <input
                    type="number"
                    value={swapAmount}
                    onChange={(e) => setSwapAmount(e.target.value)}
                    className="flex-1 bg-[#FCF4D7] text-[#7F664F] p-3 rounded-lg border border-[#A4AD89] focus:ring-2 focus:ring-[#7F664F]"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowUpDown className="text-[#7F664F]" />
              </div>

              <div className="glass-morphism p-4">
                <label className="text-sm text-[#7F664F] mb-2 block">To</label>
                <div className="flex gap-4">
                  <div className="w-1/3 bg-[#FCF4D7] text-[#7F664F] p-3 rounded-lg border border-[#A4AD89]">
                    SKEM
                  </div>
                  <input
                    type="number"
                    value={swapAmount ? Number(swapAmount) * 10 : ''}
                    readOnly
                    className="flex-1 bg-[#FCF4D7] text-[#7F664F] p-3 rounded-lg border border-[#A4AD89]"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-[#7F664F] to-[#A4AD89] p-4 rounded-lg font-medium text-[#FCF4D7]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Swap Tokens
            </motion.button>
          </div>

          {/* Right side - Token Info */}
          <div className="glass-morphism p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#7F664F]">SKEM Token Info</h3>
            <div className="space-y-2">
              <p className="text-[#7F664F]">Current Price: $0.10</p>
              <p className="text-[#7F664F]">24h Volume: $24,563</p>
              <p className="text-[#7F664F]">Market Cap: $1.2M</p>
            </div>
            <div className=" bg-[#FCF4D7] rounded-lg">
                <PriceChart />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}