import style from './Projects.module.scss'

const Projects = () => {
  return (
    <>
    <div className={style.title}>
        <h1>Projects</h1>
    </div>

    <div className={style.projectname}> 
        <a><h2>Auxie </h2></a>
        <a><h2>Pokemon API Project </h2></a>
    </div>
    </>
  )
}

export default Projects