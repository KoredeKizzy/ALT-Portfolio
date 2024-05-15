import Intro from '../src/components/Intro/Intro';
import Navbar from '../src/components/Navbar/Navbar';
import Repo from './components/Repo/Repo';


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
