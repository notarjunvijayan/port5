import './About.css'

export default function About(){
    return(
        <div className="about">
            <div className="about-left">
                <h2>Education</h2>
            </div>
            <div className="about-right">
                <div className="item-edu">
                    <h3>Rajagiri School of Engineering and Technology</h3>
                    <h4>Undergraduate Degree</h4>
                    <p>2018-2020</p>
                    <p>B.Tech Information Technology</p>
                </div>
                <div className="item-edu">
                    <h3>Bharathamatha Higher Secondary School</h3>
                    <h4>Higher Secondary</h4>
                    <p>2018-2020</p>
                    <p>Computer Science</p>
                </div>
            </div>
            
        </div>
    )
}