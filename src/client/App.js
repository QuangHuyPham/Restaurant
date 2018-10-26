import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import ListRestaurent from './components/listRestaurant';
import RouteUrl from './routers/routeUrl';

export default class App extends Component {
  state = { restaurants: [] };

  componentDidMount() {
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(restaurants => this.setState({ restaurants }));
  }

  render() {
    const { restaurants } = this.state;
    return (
      <Router>
        <div>
          <ListRestaurent restaurants={restaurants}/>
          <span>
            <RouteUrl/>
          </span>
        </div>
      </Router>
    );
  }
}
