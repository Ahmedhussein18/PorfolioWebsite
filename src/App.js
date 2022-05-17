import AboutMe from './AboutMe';
import './App.css';
import ContactMe from './ContactMe';
import Home from './PorfolioContainer/Home/Home';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <AboutMe/>
      <ContactMe />
    </div>
  );
}

export default App;
