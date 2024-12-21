// components/VerifyWebsite.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScamAlert from './scamAlert';
import VotingSystem from './votingSystem';
import WebsitePreview from './websitePreview';

export default function VerifyWebsite({url, verificationResult}) {

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {verificationResult && (
        <>
            <WebsitePreview url={url} analysisData={verificationResult} />
          <ScamAlert isScam={verificationResult.isScam} />
          <VotingSystem />
        </>
      )}
    </motion.div>
  );
}