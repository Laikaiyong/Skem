'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Navbar() {
    return (
      <motion.nav 
        className="bg-[#FCF4D7] border-b border-[#7F664F] px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#7F664F] to-[#A4AD89] text-transparent bg-clip-text">
            skem
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/profile" 
              className="text-[#7F664F] hover:text-[#A4AD89] transition-colors"
            >
              Profile
            </Link>
            <motion.a
              href="/extension.zip"
              className="glass-morphism px-4 py-2 rounded-lg font-medium text-[#7F664F] hover:glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              Download Extension
            </motion.a>
          </div>
          <WalletMultiButton />
        </div>
      </motion.nav>
    );
   }