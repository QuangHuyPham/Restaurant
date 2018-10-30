import React, { Component } from 'react';
import ItemsRestaurant from './itemsRestaurant';
import { Link } from 'react-router-dom';
class ListRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          restaurants: []
        });
    }

    componentDidMount() {
        fetch('/list/restaurants')
            .then(res => res.json())
            .then(restaurants => this.setState({ restaurants }));
    }
    render() {
        const restaurants = this.state.restaurants;
        const ListR = restaurants.map((value, key) => <ItemsRestaurant key={key} value={value} index={key}/>);
        return (
            <div style={{ textAlign: 'center' }}>
                <Link to="/"><button style={{ marginBottom: '2%', float: 'left' }}>HOME</button></Link>
                <h1>Nhà hàng</h1>
                <table border="1px solid #084951" width="80%">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>address</td>
                            <td>phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {ListR}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListRestaurant;