"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";

interface LoadingScreenProps { onComplete: () => void; }

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((n) => {
        if (n >= 100) { clearInterval(interval); setTimeout(onComplete, 400); return 100; }
        return n + 1.5;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1628]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <p className="text-[#868e96] font-mono text-sm mb-2">Initializing</p>
        <h1 className="font-bold text-white text-5xl tracking-tight">
          {personal.firstName[0]}{personal.lastName[0]}
          <span className="text-[#93c5fd]">.</span>
        </h1>
      </motion.div>

      <div className="w-64">
        <div className="progress-bar mb-3">
          <div className="progress-fill" style={{ width: `${count}%` }} />
        </div>
        <p className="text-center font-mono text-sm text-[#868e96]">
          {Math.round(count)}%
        </p>
      </div>
    </motion.div>
  );
}
