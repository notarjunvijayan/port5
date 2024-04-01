import './Hero.css'
import Image from './Arjun V.png'

export default function Hero() {
    return (
        <div className='hero' id="about-nav">
            <div className="left">
                <div className="left-text">
                    <div className="my-img">
                        <img src={Image} />
                    </div>
                </div>
            </div>
            <div className="right">
                <div className='right-data'>
                    <h1>Arjun Vijayan</h1>
                    <p>
                        Hi! I'm Arjun, a passionate Full Stack Web Developer who thrives on turning ideas into digital realities.
                    </p>
                    <p>
                        Wanna Get in Touch? Click the buttons below to get my resume or Contact me.
                    </p>
                </div>
                <div className="buttons-hero">
                    <a className='button' href="#contact-navbar">Contact</a>
                    <a className='button' href="">Resume</a>
                </div>

            </div>
        </div>
    )
}