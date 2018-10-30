import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './app.css';

import Home from './components/Home';
import ListRestaurant from './components/listRestaurant';
import RestaurantDetail from './components/restaurantDetail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/restaurants" component={ListRestaurant}/>
          <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
