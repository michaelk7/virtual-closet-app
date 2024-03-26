import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // GET request
    fetch('/api/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));

    // POST request
    fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ /* data */ })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error posting data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isLoggedIn ? <Dashboard /> : <LoginForm />}
      </header>
    </div>
  );
}

export default App;
