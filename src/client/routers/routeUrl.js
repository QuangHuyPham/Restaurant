import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Restaurant from '../components/restaurant';
import ListRestaurant from '../components/listRestaurant';

class RouteUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ ListRestaurant }/>
                <Route path="/restaural" component={ Restaurant }/>
            </div>
        );
    }
}

export default RouteUrl;