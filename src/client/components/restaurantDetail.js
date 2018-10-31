import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListFoods from './listFoods';
class RestaurantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          restaurant: null
        });

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('/list/restaurants/' + id)
            .then(res => res.json())
            .then(restaurant => this.setState({ restaurant }));
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/insert/restaurants', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                add_name: this.refs.name.value,
                add_address: this.refs.address.value,
                add_phone: this.refs.phone.value,
                add_codeRestaurant: this.refs.codeRestaurant.value
            })
        })
        .catch(error => console.log(error));
    }
    render() {
        const restaurant = this.state.restaurant;
        if (!restaurant) return <div>Loading...</div>;
        return (
            <div>
                <Link to="/restaurants"><button style={{ marginBottom: '2%', float: 'left' }}>Back</button></Link>
                <h1 style={{ textAlign: 'center' }}>Nhà hàng</h1>

                <ul>
                    <li>Tên: <span>{restaurant.info.name}</span></li>
                    <li>Địa chỉ: <span>{restaurant.info.address}</span></li>
                    <li>Số điện thoại: <span>{restaurant.info.phone}</span></li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>Tên: <input ref="name" type="text" name="name"/></li>
                        <li>Địa chỉ: <input ref="address" type="text" name="address"/></li>
                        <li>Số điện thoại: <input ref="phone" type="text" name="phone"/></li>
                        <li>Mã Nhà Hàng: <input ref="codeRestaurant" type="text" name="codeRestaurant"/></li>
                        <li><button type="submit">Thêm mới</button></li>
                    </ul>
                </form>
                <hr/>
                <ListFoods restaurant={restaurant}/>
            </div>
        );
    }
}

export default RestaurantDetail;