"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AnimatedFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative mt-auto border-t border-zinc-800 bg-gradient-to-b from-zinc-950 to-black py-8 px-6"
    >
      {/* Animated top line */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Built by text with glow */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur-lg opacity-0"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="relative text-sm font-medium text-zinc-300 hover:text-indigo-400 transition-colors duration-300">
            Built by{" "}
            <span className="text-indigo-400 font-semibold">Achintya Gupta</span>
          </span>
        </motion.div>

        {/* Right: Social links with hover glow */}
        <div className="flex items-center gap-6">
          {/* GitHub Link */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="https://github.com/AchintyaCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-60"
                animate={{
                  opacity: [0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="relative p-2 rounded-full bg-zinc-900 border border-zinc-700 group-hover:border-indigo-500 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 12px 4px rgba(99, 102, 241, 0.3)",
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors duration-300" />
              </motion.div>
            </Link>
          </motion.div>

          {/* LinkedIn Link */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="https://linkedin.com/in/achintya-gupta-bb0091311"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-60"
                animate={{
                  opacity: [0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="relative p-2 rounded-full bg-zinc-900 border border-zinc-700 group-hover:border-indigo-500 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 12px 4px rgba(99, 102, 241, 0.3)",
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.footer>
  );
}
