import React, { Component } from 'react';
import f0rest from './f0rest_dignitas.jpeg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      string: "Hello Guys, Chanchal Here",
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({monsters: users}))
  }
  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" onChange={e => 
          this.setState({ searchField: e.target.value}, () =>
          console.log(this.state))
        }/> 
        <CardList monsters = {this.state.monsters}/>
          <header className="App-header">
            <img src={f0rest} className="f0rest-logo" alt="logo" />
            <p>
              {this.state.string}
            </p>
            <button onClick={() => this.setState({string:"Welcome to f0rest's profile"})}>Change Text</button>
            <a
              className="App-link"
              href="http://team-dignitas.net/profile/f0rest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the profile
            </a>
          </header>
      </div>
    );
  }
}

export default App;
