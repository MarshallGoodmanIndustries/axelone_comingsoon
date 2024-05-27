import { motion, AnimatePresence } from "framer-motion";

function Model({src, modalTitle, modalDescription, btnTitle, btnAction}) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-black bg-opacity-75 w-full h-dvh flex justify-center items-center">
      <AnimatePresence>
        <motion.div 
          initial={{scale:0.3}}
          animate={{scale:1}}
          transition={{duration:0.3}}
          exit={{scale:0}}
          className="bg-primary rounded-lg max-w-[20rem] p-5 flex flex-col items-center gap-12 shadow-md"
        >
            <div className="relative">
              <div className="bg-[#31CB01] absolute top-0 left-0 w-[180%] h-[180%] -translate-x-6 -translate-y-6 rounded-full bg-opacity-5 animate-pulse"></div>
              <div className="bg-[#31CB02] absolute top-0 left-0 w-[140%] h-[140%] -translate-x-3 -translate-y-3 rounded-full bg-opacity-15 animate-pulse"></div>
              <div className="bg-[#31CB03] absolute top-0 left-0 w-[110%] h-[110%] -translate-x-[0.2rem] -translate-y-[0.2rem] rounded-full bg-opacity-25 animate-pulse"></div>
              <img className="w-full max-w-[4rem] relative z-10" src={src} alt="modal illustration" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-opacity-80 font-poppins font-semibold text-base md:text-lg text-center">{modalTitle}</h2>
              <p className="text-black text-opacity-80 font-roboto font-light text-base text-center">{modalDescription}</p>
            </div>
            <button className="bg-[#31CB01] cursor-pointer text-white text-base  font-poppins font-semibold rounded-lg px-4 py-1" onClick={btnAction}>
              {btnTitle}
            </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Model;