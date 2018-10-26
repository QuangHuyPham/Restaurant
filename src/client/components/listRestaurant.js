import React, { Component } from 'react';
import ItemsRestaurant from './itemsRestaurant';
class ListRestaurant extends Component {
    render() {
        const restaurants = this.props.restaurants;
        return (
            <div>
                <h1>Nhà hàng</h1>
                <table border="1px solid #084951" width="80%">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {restaurants.map((value, key) => {
                        return <ItemsRestaurant key={key} value={value} index={key}/>;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListRestaurant;