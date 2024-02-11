import './Navbar.css'

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
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Blog</li>
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