import './Intro.css'
import {easeIn, easeInOut, easeOut, motion}  from "framer-motion"

export default function Intro() {
    return (
        <motion.div className="intropage"
        initial={{x:0,y:0}}
        animate={{y:-2000}}
        transition={{duration:2,delay:1.5, ease:easeInOut}}
        >
            <motion.h1>നമസ്കാരം</motion.h1>
            <motion.p>( Greetings in Malayalam )</motion.p>
        </motion.div>
    )
}