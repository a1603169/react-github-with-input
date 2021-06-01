import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [userID, setUserID] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  //Fetch data when mounted
  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react')
    .then(response => response.json())
    .then(data => {
      setData(data.items)
    })
  },[])

  useEffect(() => {
      let result = data.filter((d) =>
      d.full_name.toLowerCase().includes(userID.toLowerCase())
    )
    setSearchResults(result);
  }, [userID, data]);


  const inputChanged = (event) => {
    setUserID(event.target.value)
  }
  
  
  return (
    <div className="App">
      <h1>Repositories</h1>
        <input 
          id="searchInput"
          type="text" 
          placeholder="search" 
          name="search" 
          value={userID} 
          onChange={inputChanged}
        />
        {/* No need for search button if searching using input (useEffect will trigger when typed) 
        <button onClick={search}>Search</button> */}
      <table>
        <tbody>
          <tr>
           <th>Name</th>
           <th>URL</th>
          </tr>
          {searchResults.map((data, index) => 
           <tr key={index}>
             <td>{data.full_name}</td>
             <td><a 
                    target="_blank" 
                    href={data.html_url}
                    >
                      {data.html_url}
                  </a>
            </td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default App;