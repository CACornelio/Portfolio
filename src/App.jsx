import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <a href="https://github.com/CACornelio" target="_blank">
          <img src='https://avatars.githubusercontent.com/u/126113822?v=4' className="pfp" alt="Vite logo" />
        </a>
        </div>
      
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
