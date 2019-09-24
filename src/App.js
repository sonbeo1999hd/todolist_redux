import React from 'react';
import './App.css';
import FootballsContainer from '../src/containers/footballList'
import FootballerContainer from './containers/footballer_details'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>List of Footballer</h2>
            <FootballsContainer></FootballsContainer>
          <hr></hr>
          <h2>List of cars: </h2>
            <FootballerContainer></FootballerContainer>
      </header>
    </div>
  );
}

export default App;
