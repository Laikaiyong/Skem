"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import VerifyWebsite from "./verifyWebsite";

const WebsiteInput = () => {
  const [url, setUrl] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(false); // Update the state with the submitted URL
    setVerificationResult({});
    console.log("Submitting");
    const result = {
      isScam: (url == "https://claim-pudgypenguins.org") ? true : false,
      trustScore: (url == "https://claim-pudgypenguins.org") ?  12 :78,
      metrics: {
        ssl: true,
        age: '2 years',
        trafficRank: '125,432',
        backlinks: 1250,
        loadTime: '1.2s',
        suspiciousPatterns: 2,
      }
    }; // Mock result for verification
    const formData = new FormData(e.target);
    const submittedUrl = formData.get("url"); // Retrieve the URL from the form
    setUrl(submittedUrl); // Update the state with the submitted URL
    setVerificationResult(result);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="glass-morphism p-6 space-y-4"
        {...fadeIn}>
        Copy
        <motion.input
          type="url"
          name="url"
          placeholder="Enter website URL"
          className="w-full bg-[#FCF4D7] text-[#7F664F] p-4 rounded-lg border border-[#A4AD89] focus:border-[#7F664F] focus:ring-2 focus:ring-[#7F664F] transition-all"
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-[#7F664F] to-[#A4AD89] text-[#FCF4D7] py-4 rounded-lg font-medium glow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Verify Website
        </motion.button>
      </motion.form>
      <VerifyWebsite url={url} verificationResult={verificationResult} />
    </>
  );
};

export default WebsiteInput;
