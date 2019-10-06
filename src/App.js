import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import ItemDetail from './ItemDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/shop' exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
