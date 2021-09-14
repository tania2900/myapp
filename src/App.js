import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("")

  const onSetName = (text) => {
    console.log(text.target.value)
    setName(text.target.value)
  }

  useEffect(() => {
    setName("Antares")
  }, [])

  return (
    <div className="App">
      <nav>
      <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/classcomp">Class Component</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Halo {name}</h1>

        <input value={name} type="text" onChange={onSetName} name="name" />
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
      </header>

    </div>
  );
}

export default App;