import { Link } from 'react-router-dom'
import './Navbar.css'
import Blog from '../Blog/Blog'

export default function Navbar() {

  const setDark=()=>{
    document.querySelector('body').setAttribute('theme','dark')
  }  

  const setLight=()=>{
    document.querySelector('body').setAttribute('theme','light')
  }

  const setToggle=(e)=>{
        if(e.target.checked){
            setDark();
        }
        else{
            setLight();
        }
  }
  return (
    <div className="nav-container">
      <div className='navbar'>
        <h1>Arjun</h1>
        <ul>
            <li><a href="/#about-nav">Home</a></li>
            <li><a href="/#projects-nav">Projects</a></li>
            <li><a href='/#contact-navbar'>Contact</a></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
        <div className="toggle">
        <label className="switch">
          <input type="checkbox" onChange={setToggle}/>
          <span className="slider round"></span>
        </label>
        </div>
    </div>
    </div>
  )
}