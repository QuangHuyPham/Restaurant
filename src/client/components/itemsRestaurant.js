import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ItemsRestaurant extends Component {
    render() {
        const { index, value } = this.props;
        if (value.id % 2 == 0) var color = '#ccc';
        else color = 'while';
        return (
            <tr style={{ backgroundColor: color }}>
                <td><Link to={`/restaurants/${value.id}`}>{index + 1}</Link></td>
                <td>{value.name}</td>
                <td>{value.address}</td>
                <td>{value.phone}</td>
            </tr>
        );
    }
}
export default ItemsRestaurant;