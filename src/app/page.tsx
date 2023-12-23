'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const paragraph = "Bonjour, je suis Victoria, une photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables."

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.008
    }
  }
}
const word = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}



export default function Home() {
  return (
    <motion.main className="w-screen h-screen bg-gradient-to-tr from-slate-800 to-gray-800 relative overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="w-screen h-[60%]">
        <div className="relative text-white z-0 h-[25%] left-0 font-bold text-9xl uppercase text-left w-screen">
          <motion.h1 className="absolute z-20 left-0" variants={item}>Libre</motion.h1>
        </div>
        <div className="relative text-white h-[25%] font-bold text-9xl w-full uppercase text-right w-screen">
          <motion.h1 className="absolute z-20 right-0" variants={item}>&amp;</motion.h1>
        </div>
        <div className="relative text-white h-[25%] font-bold text-9xl uppercase text-left">
          <motion.h1 className="absolute z-20 left-0"variants={item}>Viv</motion.h1>
        </div>
        <div className="relative text-white h-[25%] font-bold text-9xl w-full uppercase text-right">
          <motion.h1 className="absolute z-20 right-0" variants={item}>Ant</motion.h1>
        </div>
        <Image
          className="z-10 rounded-[40%] h-auto mt-0 mb-auto w-screen absolute top-0"
          src="/header.png"
          alt="500"
          width={320}
          height={400}/>
      </div>
      <div className="text-white text-center flex word mt-5">
              <motion.p className="w-[90%] mx-auto text-center paraph"
                variants={sentence}
                initial='hidden'
                animate='visible'
              >
                {paragraph.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={char + '-' + index} variants={word}
                    >
                      {char}
                    </motion.span>
                  )
                })}
              </motion.p>
      </div>
      <div className="w-full flex z-50 my-6">
        <motion.a className="m-auto bg-red-700 hover:bg-transparent border-red-500 border text-white font-bold rounded py-2 px-4 flex"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/works"
        >Voir mon travail</motion.a>
      </div>
      <div className="z-50 social text-white text-2xl w-screen flex">
        <div className="social m-auto w-[50%] flex justify-between">
          <motion.a href="https://www.instagram.com/libre_vivant_photographie/?igshid=YmMyMTA2M2Y%3D" target="blank" variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ><SocialIcon url="www.instagram.com" as="span"/></motion.a>
          <motion.a href="https://www.tiktok.com/@libre_vivant" target="blank" variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}    
          ><SocialIcon url="www.tiktok.com" as="span"/></motion.a>
          <motion.a href="https://m.facebook.com/profile.php?id=100072519471892" target="blank" variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}   
          ><SocialIcon url="www.facebook.com" as="span"/></motion.a>
        </div>
      </div>
    </motion.main>

  )
}