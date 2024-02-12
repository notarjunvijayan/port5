import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import About from './About/About'

export default function HomeComps(){
    return(
        <>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </>
    )
}