import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {Markup} from 'interweave'
import './BlogData.css'

export default function BlogData(){

    const url = "http://localhost:8080"
    const [blog, setBlog] = useState({})
    const location = useLocation()

    const info = location.state.index


    useEffect(()=>{
        fetch(url+'/blog-list',{
            method:"get",
            mode:"cors"
        }).then(
            res=>res.json()
        ).then(
            data=>{
                setBlog(data[info])
            }
        )
    },[])

    return(
        <>
        <div className="blog-back-button">
            <Link to='/blog'>Back to Blogs</Link>
        </div>
        <div className="blog-content">
            <h1>{blog.Title}</h1>
            <p>{blog.Date}</p>
            <div>
                <Markup content={blog.Data}/>
            </div>
        </div>
        </>
    )
}