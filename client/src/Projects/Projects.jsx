import {useEffect, useState} from 'react'
import './Projects.css'

export default function Projects(){
    
    //Setting Connection Link to server
    const url = "http://localhost:8080"


    const [details,setDetails] = useState([])
    const [show, setShow] = useState(false)
    const[index, setIndex] = useState()

    useEffect(()=>{
        fetch(url+'/projects',{
            method:"get",
            mode:"cors"
        }).then(
            res=>res.json()
        ).then(
            data=>{
                setDetails(data)
            }
        )
    },[])

    return(
        <div className="about">
            <div className="about-left">
                <h2>Projects</h2>
            </div>
            <div className="about-right">   
                <div className="project-cards">
                    {details.map((item,key)=>{
                        return(
                            <div className='project-card' onClick={()=>{
                                setIndex(key)
                                setShow(true)
                                }
                                }>
                                <h3>{item.Name}</h3>
                                <p>{item.Description}</p>
                            </div>
                        )
                    })}
                </div>
                {show&&(
                    <div className="project-details">
                        <div className="project-box">
                        
                            <div className="project-details-card">
                            {
                                <>
                                    <div className="button-box">
                                        <button className="close-button" onClick={()=>{setShow(false)}}>X</button>
                                    </div>
                                    <img src={details[index].Image}/>
                                    <div className="project-deets-text">
                                        <h3>{details[index].Name}</h3>
                                        <p>{details[index].Description}</p>
                                        <div className="skill-cards">
                                            <h2>Technologies Used</h2>
                                            <div className="skill-card-items">
                                            {details[index].Tech.map((item)=>{
                                                return(
                                                    <div className="skill-card">
                                                        {item}
                                                    </div>
                                                )
                                            })}
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <a href={details[index].Repo} target='blank'>Github</a>
                                            <a href={details[index].Link} target='blank'>Live</a>
                                        </div>
                                    </div>
                                </>
                            }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}