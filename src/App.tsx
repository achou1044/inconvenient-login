import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [rand, setRand] = String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33)

  const handleSubmit = () => {
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  // resets the username and password
  const handleReset = () => {
    setName("")
    setPassword("")
  };

  // should show a random number for the user to accept, currently just fills in the username and password
  const randomGen = () => {
    //setRand(String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33))
    setName(name + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33))
    setPassword(name + String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33))
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>

          <div>
            <label htmlFor="password">.--. .- ... ... .-- --- .-. -..:</label>
            <input
              type="password"
              id="password"
              disabled={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div>
              <label htmlFor="name">..- ... . .-. -. .- -- .</label>
              <input
                type="text"
                id="name"
                disabled={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}>Delete</button>
          <button onClick={randomGen}>Enter</button>
        </form>
      )}
    </div>
  );
};

export default App;
