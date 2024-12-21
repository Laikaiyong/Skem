'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const VotingSystem = () => {
    const [votes, setVotes] = useState({ up: 0, down: 0 });
   
    return (
      <motion.div 
        className="glass-morphism p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
       
          <div className="flex space-x-4">
            <motion.button
              onClick={() => setVotes(v => ({ ...v, up: v.up + 1 }))}
              className="bg-[#A4AD89] text-[#FCF4D7] px-6 py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👍 Upvote
            </motion.button>
            <motion.button
              onClick={() => setVotes(v => ({ ...v, down: v.down + 1 }))}
              className="bg-[#7F664F] text-[#FCF4D7] px-6 py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👎 Downvote
            </motion.button>
          </div>
      </motion.div>
    );
   };
   
export default VotingSystem;