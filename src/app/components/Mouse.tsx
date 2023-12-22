'use client'
 
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useFollowPointer } from "./use-follow-pointer";
 
export default function Mouse() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
 
  return (
    <motion.div
      ref={ref}
      className="box w-[150px] h-[150px] rounded-full bg-red-500"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  )
}