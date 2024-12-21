import { motion } from 'framer-motion';
import { slideIn } from '../animation';

const ScamAlert = ({ isScam }) => {
    return (
      <motion.div 
        className={`glass-morphism p-6 ${
          isScam 
            ? 'border-[#7F664F] text-[#7F664F]' 
            : 'border-[#A4AD89] text-[#A4AD89]'
        }`}
        {...slideIn}
      >
        <motion.h3 
          className="text-2xl font-bold mb-2"
        >
          {isScam ? '⚠️ Warning: Potential Scam' : '✅ Website Verified'}
        </motion.h3>
        <p className="opacity-90">
          {isScam 
            ? 'This website has been flagged as potentially dangerous by our community.' 
            : 'This website has been verified as safe by our community.'}
        </p>
      </motion.div>
    );
   };
   
export default ScamAlert;