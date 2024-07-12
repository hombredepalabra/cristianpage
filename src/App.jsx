import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="app">
      <Background />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;