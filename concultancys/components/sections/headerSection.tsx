'use client'
import { motion } from "framer-motion";

export default function SectionHeader({ title, description, bgColor= 'bg-[#0A1236]/95' }: { title: string, description: string, bgColor?: string }) {
  return (
    <section className={`relative w-full py-24 px-6 md:px-16 ${bgColor}  text-white overflow-hidden`}>
      {/* Background gradient and lines */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E5C] via-[#0D0F6F] to-[#0B0E5C] opacity-90" />
      <div className="absolute inset-0 bg-[url('/lines.svg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
      <motion.h2
        className="text-4xl md:text-5xl mb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
        {title}
      </motion.h2>

        <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-3xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
        {description}
        </motion.p>
    </div>
    </section>
  );
}
