// components/TokenSwap.js
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TokenSwap() {
    const [amount, setAmount] = useState('');
   
    return (
      <motion.div
        className="glass-morphism p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-xl font-bold text-[#7F664F] mb-4">Swap Tokens</h2>
        <div className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#FCF4D7] text-[#7F664F] p-3 rounded-lg border border-[#A4AD89] focus:ring-2 focus:ring-[#7F664F]"
            placeholder="Amount"
          />
          <motion.button
            className="w-full bg-gradient-to-r from-[#7F664F] to-[#A4AD89] p-3 rounded-lg font-medium text-[#FCF4D7]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Swap
          </motion.button>
        </div>
      </motion.div>
    );
   }