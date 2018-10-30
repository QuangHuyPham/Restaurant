import React, { Component } from 'react';

class ListFoods extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        });
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
            {restaurant.map((value, key) =>
            (<ul key={key}>
                <li>Tên món: <span>{value.nameFood}</span></li>
                <li>Giá tiền: <span>{value.priceFood}</span></li>
                <li>Mô tả: <span>{value.describeFood}</span></li>
                <li><button>Edit</button></li>
                <li><button>Delete</button></li>
             </ul>))}
        </div>
    );
  }
}
export default ListFoods;
