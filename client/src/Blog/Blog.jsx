import { useState,useEffect } from 'react'
import './Blog.css'
import {useNavigate} from 'react-router-dom'

export default function Blog(){

    const url = "https://portfolio-backend-4hz2uxv5lq-el.a.run.app"
    const [blogs,setBlogs] = useState([])
    const navigate = useNavigate()

    function navBlog(key){
        navigate("/blog/view", {state:{index:key}})
        console.log(key)
    }
    
    useEffect(()=>{
        fetch(url+'/blog-list',{
            method:"get",
            mode:"cors"
        }).then(
            res=>res.json()
        ).then(
            data=>{
                setBlogs(data)
                console.log(data)
            }
        )
    },[])

    console.log(blogs)
    return(
        <>
            <div className="blog-hero">
                <h1>Arjun Vijayan's Blogs</h1>
                <p>Welcome to the blog section of my portfolio page, where I post my online blogs.</p>
            </div>

            <div className="blog-list">
                <h2>Blog List</h2>
                {
                    blogs.map((item,key)=>{
                        return(
                            <div className="blog-title-card" onClick={()=>{navBlog(key)}}>
                                <h3>{item.Title}</h3>
                                <p>{item.Date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}