import { BrowserRouter, Routes,Route} from 'react-router-dom';

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import ProjectForm from './components/ProjectForm'
import Contact from './components/Contact'



const App = () => {
 
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<ProjectForm />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>

)
}
export default App;
