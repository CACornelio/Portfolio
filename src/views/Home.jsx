import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import style from './Home.module.scss'
import Projects from './Projects'

const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    
     <div className={style.sidebar}>
        <a href="https://github.com/CACornelio" target="_blank" rel="noreferrer">
          <img src='https://avatars.githubusercontent.com/u/126113822?v=4' className="pfp" alt="Vite logo" />
        </a>
        
      
      <h1>Carlos Cornelio</h1>
      <h2>Front End Developer (Full Stack)</h2>
      
      <div>
     
        
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src='https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png' className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1461px-CSS.3.svg.png' className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' className="logo react" alt="React logo" />
        </a>
       
      </div>
      </div>
      <Projects/>
    </>
  )
}

export default Home