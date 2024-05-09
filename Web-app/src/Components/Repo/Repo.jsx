import React, { useState, useEffect } from "react";
import '../Repo/Repo.css';


function App() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState([true])
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch('https://api.github.com/users/KoredeKizzy/repos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setRepositories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    }
  
    fetchRepositories(); // Call fetchRepositories inside useEffect
  
  }, [token]); // Include token in the dependency array
  

  async function fetchRepositories(KoredeKizzy) {
    try {
      const response = await fetch('https://api.github.com/users/KoredeKizzy/ALT-Portfolio', {
        headers: {
          Authorization: `Bearer ${token}` // Use the token in the request headers
        }
      });
      const data = await response.json();
      setRepositories(data);

    } catch (error) {
      console.error('Error fetching repositories:', error);
      
    }
  }
  

  return (
    <div className="container">
      <h1>GitHub Repositories</h1>
      <div id="repositories">
        {repositories.map(repository => (
          <div key={repository.id} className="repository">
            <h3>{repository.name}</h3>
            <p>{repository.description || "No description"}</p>
            <p>Stars: {repository.stargazers_count} | Forks: {repository.forks_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
