import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListFoods from './listFoods';
class RestaurantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          restaurant: []
        });
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('/list/restaurants/' + id)
            .then(res => res.json())
            .then(restaurant => this.setState({ restaurant }));
    }
    render() {
        const restaurant = this.state.restaurant;
        const resDetail = restaurant.map((value, key) =>
            (<ul key={key}>
                <li>Vị trí: <span>{value.id}</span></li>
                <li>Tên: <span>{value.name}</span></li>
                <li>Địa chỉ: <span>{value.address}</span></li>
                <li>Số điện thoại: <span>{value.phone}</span></li>
             </ul>)
        );
        return (
            <div>
                <Link to="/restaurants"><button style={{ marginBottom: '2%', float: 'left' }}>Back</button></Link>
                <h1 style={{ textAlign: 'center' }}>Nhà hàng</h1>
                <div>
                    {resDetail}
                    <hr/>
                    <ListFoods restaurant={restaurant}/>
                </div>
            </div>
        );
    }
}

export default RestaurantDetail;