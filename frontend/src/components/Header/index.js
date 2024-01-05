import {Link} from 'react-router-dom'
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import './index.css'

const name = "Vijender Chimma"

const Header = () => {
    const [isTrue,setTrue] = useState(false)
    const onClickMenu = () => {
        setTrue(prev=>!prev)
    }

    const linkClassName = isTrue ? "link-container" : "hide-link-container"
    const iconClassName = isTrue ? "hide-icon" : "menu-icon"

    return (
    <>
    <nav className='nav-container-desktop'>
        <h1 className='name'>{name}</h1>
        <ul className='link-container'>
            <Link to = "/" className='nav-link'><li>Home</li></Link>
            <Link to = "/projects" className='nav-link'><li>Projects</li></Link>
            <Link to = "/form" className='nav-link'><li>ProjectForm</li></Link>
            <Link to = "/about" className='nav-link'><li>About</li></Link>
            <Link to = "/contact" className='nav-link'><li>Contact</li></Link>
        </ul>
    </nav>
    <nav className='nav-container'>
        <h1 className='name'>{name}</h1>
        <IoMenuSharp className = {iconClassName} onClick = {onClickMenu}/>
        <ul className= {linkClassName}>
            <Link to = "/" className='nav-link'><li>Home</li></Link>
            <Link to = "/projects" className='nav-link'><li>Projects</li></Link>
            <Link to = "/form" className='nav-link'><li>ProjectForm</li></Link>
            <Link to = "/about" className='nav-link'><li>About</li></Link>
            <Link to = "/contact" className='nav-link'><li>Contact</li></Link>
        </ul>
    </nav>
    </>
    
)
}
export default Header