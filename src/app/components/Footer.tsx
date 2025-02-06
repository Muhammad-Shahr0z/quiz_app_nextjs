"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 py-6 px-4 absolute bottom-0 w-full"
    >
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.p
          className="text-white text-sm text-center md:text-left"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Created by <span className="font-bold">Muhammad Shahroz</span> | Student Leader 
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/muhammad-shahroz-a35b68292/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 text-white text-3xl hover:text-gray-200"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
