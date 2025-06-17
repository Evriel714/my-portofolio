import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
