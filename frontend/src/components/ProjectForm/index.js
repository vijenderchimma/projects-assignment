import { useContext } from 'react'
import { projectContext } from '../../Context/projectContext'
import Header from '../Header'
import './index.css'


const ProjectForm = () => {

    const {projectList,setProjectList,submitData} = useContext(projectContext)

    const onChangeProjectName = (event) => {
        setProjectList({...projectList,"name":event.target.value})
    }

    const onChangeProjectLink = (event) => {
        setProjectList({...projectList,"link":event.target.value})
    }

    const onChangeDescription = (event) => {
        setProjectList({...projectList,"description":event.target.value})
    } 

    const onChangeImageLink = (event) => {
        setProjectList({...projectList,"image":event.target.value})
    }




      return (
        <>
        <Header />
        <div className='form-main-container'>
            <h1>Add Project</h1>
            <form className='form-container' onSubmit={submitData}>
                <label htmlFor = "projectName" className='label'>PROJECT NAME</label>
                <input type = "text" id = "projectName" value = {projectList.name} onChange={onChangeProjectName} className='user-input' />
                <label htmlFor='projectLink' className='label'>PROJECT LINK</label>
                <input type = "text" id = "projectLink" value={projectList.link} onChange={onChangeProjectLink} className='user-input' />
                <label htmlFor='imageLink' className='label'>Image LINK</label>
                <input type = "text" id = "imageLink" value={projectList.image} onChange={onChangeImageLink} className='user-input' />
                <label htmlFor='description' className='label'>Description</label>
                <textarea id = "description" value = {projectList.description} className='user-input' onChange={onChangeDescription} row = "10" col= "50" />
                <input type = "submit" value = "Add" className='submit-button' />
            </form>
        </div>
        </>
    )
}

export default ProjectForm