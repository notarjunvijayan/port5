import './Hero.css'
import Image from './Arjun V.png'
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className='hero' id="about-nav">
            <div className="left">
                <div className="left-text">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 4 }}
                        className="my-img">
                        <img src={Image} />
                    </motion.div>
                </div>
            </div>
            <div className="right">
                <div className='right-data'>
                    <motion.h1
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 4.2 }}
                    >Arjun Vijayan</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 4.3 }}
                    >
                        Hi! I'm Arjun, a passionate Full Stack Web Developer who thrives on turning ideas into digital realities.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 4.3 }}>
                        Wanna Get in Touch? Click the buttons below to get my resume or Contact me.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 4.3 }}
                    className="buttons-hero">
                    <a className='button' href="#contact-navbar">Contact</a>
                    <a className='button' target="_blank" href="https://drive.google.com/file/d/1hZrmqmK67pSG5F2ju9WugRtEixfOlZPC/view?usp=sharing">Resume</a>
                </motion.div>

            </div>
        </div>
    )
}