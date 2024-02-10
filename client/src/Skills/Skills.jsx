import "./Skills.css"
export default function Skills(){
    return(
        <div className="about">
            <div className="about-left">
                <h2>Skills</h2>
            </div>
            <div className="about-right">   
                <div className="skill-class">
                    <ul>
                        <li>ReactJs</li>
                        <li>SvelteJs</li>
                        <li>Nodejs</li>
                    </ul>
                    <h3>Libraries</h3>
                </div>
                <div className="skill-class">
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Golang</li>
                </ul>
                <h3>Languages</h3>
                </div>
                <div className="skill-class">
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Oracle SQL Plus</li>
                </ul>
                <h3>Databases</h3>
                </div>
            </div>
            
        </div>
    )
}