import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Repo from "./components/Repo/Repo";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    <Repo />
 </div>
  );
}

export default App;
