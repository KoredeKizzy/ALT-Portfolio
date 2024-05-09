import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Repo from "./Components/Repo/Repo";


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
