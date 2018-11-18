import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import TopTile from './components/homepage/banner/topTile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact strict component={TopTile}/>
        </div>
      </Router>
    );
  }
}

export default App;
