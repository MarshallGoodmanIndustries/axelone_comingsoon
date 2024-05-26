import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FaqItem = ({question, ans}) =>{
    const [expand, setExpand] = useState(false);

    return (
        <div className="border-b border-solid border-b-[#77808B] ">
                <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className=" text-xl md:text-2xl text-black text-opacity-80 font-medium font-poppins ">{question}</h3>
                    <div className="text-lg cursor-pointer" onClick={()=> setExpand(!expand)}>
                        {expand ? <FaMinus/> : <FaPlus />}
                    </div>
                </div>
                <AnimatePresence>
                    ${expand && (
                        <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`faq-ans font-body text-lg text-[#77808B] font-normal mb-4`}>{ans}</motion.p>
                        )}
                </AnimatePresence>
        </div>
    )
}

export default FaqItem;