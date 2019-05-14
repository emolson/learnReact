import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import ContactData from './ContactData/ContactData'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    };

    //Will => set up state prior to rendering children
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                //['salad', '1']
                ingredients[param[0]] = + param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutContinue={this.checkoutContinuedHandler}
                    checkoutCancel={this.checkoutCancelledHandler}
                    ingredients={this.state.ingredients}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice}/>)}
                />
            </div>
        )
    }
}

export default Checkout;