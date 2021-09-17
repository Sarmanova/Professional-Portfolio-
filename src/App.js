import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './component/layout/Navbar';
//import Layout from './component/layout/Layout';
function App() {
  return (
    <div>   
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
      
   </div>

  );
}

export default App;
