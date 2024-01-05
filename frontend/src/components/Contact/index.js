import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import Header from '../Header'

import './index.css'

const Contact = () => (
    <>
    <Header />
    <div className="contact-container">
        <div className="icon-container">
            <FaInstagram className="icon"/>
            <FaLinkedin className="icon"/>
            <IoIosMail className="icon"/>
        </div>
        <p>Copyright <FaRegCopyright />. All rights reserved.</p>
    </div>
    </>
   
)
export default Contact