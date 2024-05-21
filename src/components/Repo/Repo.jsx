import React from 'react';
import { useState, useEffect } from "react";
import '../Repo/Repo.css';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Display 3 items per page

  // Calculate total pages based on the number of items and items per page
  const totalPages = Math.ceil(repositories.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(repositories) ? repositories.slice(indexOfFirstItem, indexOfLastItem) : [];

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch('https://api.github.com/users/KoredeKizzy/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }

    fetchRepositories(); // Call fetchRepositories inside useEffect
  }, []); // Removed token from the dependency array

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure current page doesn't go below 1
  };

  return (
    <div className="container">
      <div id="repositories">
        {currentItems.map(repository => (
          <div key={repository.id} className="repository">
            <h3>{repository.name}</h3>
            <p>{repository.description || "No description"}</p>
            <p>Stars: {repository.stargazers_count} | Forks: {repository.forks_count}</p>
          </div>
        ))}
      </div>
      <br />
     
        <button className="button button1" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="button button2" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
     
    </div>
  );
}

export default App;
