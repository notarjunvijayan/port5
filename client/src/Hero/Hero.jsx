import './Hero.css'

export default function Hero(){
    return(
        <div className='hero' id="about-nav">
        <div className="left">
            <div className="left-text"> 
                <h1>Arjun Vijayan</h1>
            </div>
        </div>
        <div className="right">
                <div>
                <p>
                    I'm Arjun, a passionate Full Stack Web Developer who thrives on turning ideas into digital realities.
                </p>
                <p>
                    Wanna Get in Touch? Click the buttons below to get my resume or Contact me.
                </p>
                </div>
                <button>Contact</button>
        </div>
        </div>
    )
}