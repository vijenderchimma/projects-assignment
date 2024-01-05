import React, {useState} from "react";
import App from "../App.js";

export const projectContext = React.createContext()

const Context = () => {
    const [projectList,setProjectList] = useState([])
    const [finalData,setFinalData] = useState([])
    console.log(projectList)

    const submitData = (event) =>{
        event.preventDefault()
        setFinalData(prevData=>[...prevData,projectList])
    }
    return (
    <div>
        <projectContext.Provider value = {{projectList,setProjectList,finalData,setFinalData,submitData}}>
            <App />
        </projectContext.Provider>
    </div>
    )
}

export default Context;