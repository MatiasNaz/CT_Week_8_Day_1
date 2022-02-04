import React, { Component } from 'react'
import Product from '../components/Product';

export default class Shop extends Component {


    loopThroughItems = (listOfItems) => {
        return listOfItems.map(product => <Product key={product.id} addToCart={this.props.addToCart} product={product} />)
    }

    render() {
        return (
            <div className='row'>
                {this.loopThroughItems(this.props.items)}
            </div>
        )
    }
}
