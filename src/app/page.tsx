"use client";
import Link from "next/link";
import { FaPlayCircle, FaFire } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 space-y-6"
    >
      {/* Heading with animation */}
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Next.js Quiz
      </motion.h1>

      {/* Buttons with effects */}
      <motion.div className="flex flex-col gap-4">
        {/* Easy Quiz Button */}
        <Link href="/quiz/easy">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            <motion.span
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            >
              <FaPlayCircle className="mr-2" />
            </motion.span>
            Start Easy Quiz
          </motion.button>
        </Link>

        {/* Hard Quiz Button */}
        <Link href="/quiz/hard">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <FaFire className="mr-2" />
            </motion.span>
            Start Hard Quiz
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
