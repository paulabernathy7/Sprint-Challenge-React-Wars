import React, { Component } from 'react';
import './App.css';
import Characters from "./components/Characters"

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      // above is our list of starwars characters in an array that we need to map over
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters starwarsChars={this.state.starwarsChars}/>
        {/* above we're calling our component of starwars characters and we're passing whatever is in our state to that component */}
      </div>
      
    );
  }
}

export default App;
