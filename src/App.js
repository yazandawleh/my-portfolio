
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/home/Home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Connect from './components/connect/connect';
import Footer from './components/footer/footer';
import BetweenFloating from './components/toaddemail/BetweenFloating';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Home/>
        <Skills />
        <Projects />
        <Connect />
        <BetweenFloating/>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
