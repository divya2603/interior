import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import TopTile from './components/homepage/banner/topTile'
import Rooms from './components/pages/rooms/rooms'
import Detail from './components/pages/detail/detail'
import Living from './components/pages/living/living'
import Bedroom from './components/pages/bedroom/bedroom'
import Kitchen from './components/pages/kitchen/kitchen'
import Wardrobe from './components/pages/wardrobe/wardrobe'
import Construction from './components/pages/construction/construction'
import Blogs from './components/pages/blogs/blogs'
import Footer from './components/footer/ourWork'
import diningRooms from './components/pages/diningRooms/diningRooms';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path='/' exact strict component={TopTile}/>
            <Route path='/rooms' exact strict component={Rooms}/>
            <Route path='/rooms/*' exact strict component={Detail}/>
            <Route path='/detail/*' exact strict component={Detail}/>
            <Route path='/living-rooms' exact strict component={Living}/>
            <Route path='/living/*' exact strict component={Detail}/>
            <Route path='/bedrooms' exact strict component={Bedroom}/>
            <Route path='/bedrooms/*' exact strict component={Detail}/>
            <Route path='/dining-rooms' exact strict component={diningRooms}/>
            <Route path='/dining-rooms/*' exact strict component={Detail}/>
            <Route path='/kitchen' exact strict component={Kitchen}/>
            <Route path='/kitchen/*' exact strict component={Detail}/>
            <Route path='/wardrobe' exact strict component={Wardrobe}/>
            <Route path='/wardrobe/*' exact strict component={Detail}/>
            <Route path='/construction' exact strict component={Construction}/>
            <Route path='/construction/*' exact strict component={Detail}/>
            <Route path='/blogs' exact strict component={Blogs}/>
            <Route path='/blogs/*' exact strict component={Detail}/>

          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
