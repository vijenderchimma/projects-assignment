import Header from '../Header'
import './index.css'

const Home = () => (
    <div className='home-container'>
    <Header />
    <div className='home-card-container'>
        <p className='role'>Software Engineer</p>
        <h1>Hello, My name is Vijender Chimma</h1>
        <p>My name is Vijender Chimma. Currently Am learning MERN Stack Development. I had worked on Projects like Nxttrendz application which similar to amazon,Todolist Application where users can track their daily tasks</p>
        <div className='button-container'>
            <button className='projects-button'>Projects</button>
            <button className='linkedin-button'>LinkedIn</button>
        </div>
    </div>
    </div>
)

export default Home