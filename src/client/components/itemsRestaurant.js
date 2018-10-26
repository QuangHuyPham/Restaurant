import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class ItemsRestaurant extends Component {
    render() {
        const index = this.props.index;
        const value = this.props.value;
        return (
            <tr>
                <td>{index + 1}</td>
                <Link to={"/restaurant"}><td>{value.name}</td></Link>
                <td>{value.address}</td>
                <td>{value.phone}</td>
            </tr>
        );
    }
}

export default ItemsRestaurant;