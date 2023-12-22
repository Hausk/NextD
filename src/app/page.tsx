'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
    <motion.div
      className="box w-[150px] h-[150px] rounded-full bg-red-500"
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
    </>
  )
}
