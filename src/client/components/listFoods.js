import React, { Component } from 'react';
import $ from 'jquery';
class ListFoods extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        });
    }

    componentDidMount() {
        const { restaurant } = this.props;
        restaurant.foods.map(value =>
        fetch('/list/restaurants/' + value.idFood)
            .then(res => res.json())
            .then(restaurant => this.setState({ restaurant }))
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const idFood = $('#delFood').val();
            fetch('/delete/restaurants/' + idFood, {
                method: 'delete'
            })
        .catch(error => console.log(error));
    }
  render() {
    const { restaurant } = this.props;
    return (
        <div>
            <div>
                <label>Tên món </label><input type="text"/>
                <label>Giá tiền</label><input type="text"/>
                <label>Mô tả</label><input type="text"/>
                <input type="submit" value="UPDATE"/>
                <input type="submit" value="SUBMIT"/>
            </div>
            {restaurant.foods.map((value, key) =>
            (<ul key={key}>
                <li>Tên món: <span>{value.nameFood}</span></li>
                <li>Giá tiền: <span>{value.priceFood}</span></li>
                <li>Mô tả: <span>{value.describeFood}</span></li>
                <li><button>Edit</button></li>
                <form onSubmit={this.handleSubmit}>
                    <li><input id="delFood" type="submit" name="idFood" value={`${value.idFood}`}/></li>
                </form>
             </ul>))}
        </div>
    );
  }
}
export default ListFoods;
