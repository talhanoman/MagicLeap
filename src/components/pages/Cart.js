import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
import { bindActionCreators } from 'redux'
import {Link} from "react-router-dom"
import axios from 'axios'
import { deleteCartItem, updateCart, getCart } from '../../actions/cartActions'


class Cart extends Component {

    componentDidMount() {

        this.props.getCart()

        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {
            preventScrolling: true,
            dismissible: true
        });
    }


submitOrder = ()=>{
    let order = {
fullname : this.refs.fullname.value,
email : this.refs.userEmail.value,
address : this.refs.address.value

    }

    axios.post('/order', {order})
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        if(err){
            throw err
        }
    })
    this.props.cart = 0
}



    onDelete(_id) {
        const bookToDelete = this.props.cart

        const indexToDelete = bookToDelete.findIndex(
            function (cart) {
                return cart._id === _id
            }
        )
        let cartAfterDelete = [...bookToDelete.slice(0, indexToDelete), ...bookToDelete.slice(indexToDelete + 1)]
        this.props.deleteCartItem(cartAfterDelete)
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1, this.props.cart)
    }

    onDecrement(_id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(_id, -1, this.props.cart)
        }
    }



    render() {

        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmpty()
        }
    }
    renderEmpty() {
        return (<div style={{ margin: "55px" }}>
            <h5 className="center-align">Your Cart is currently Empty!</h5>
            <p className="center-align">Add in something to view your cart</p>
        </div>)
    }

    renderCart() {


        const cartItemsList = this.props.cart.map(function (cartItem, index) {
            return (
                <tr key={index} >
                    <td>{cartItem.title}</td>
                    <td><button className='btn' onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)}>-</button><span className="badge">{cartItem.quantity}</span><button className='btn' onClick={this.onIncrement.bind(this, cartItem._id)}>+</button></td>
                    <td>${cartItem.price}</td>
                    <td><button onClick={this.onDelete.bind(this, cartItem._id)} className='btn waves-effect red'>X</button></td>
                </tr>

            )
        }, this)
        return (
            <div className="container">
                <div className="section"></div>
                <h4 className="center-align">Your Cart</h4>
                <div className="section"></div>
                <table className="centered responsive-table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Quantity</th>
                            <th>Item Price</th>
                            <th>Remove Item</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItemsList}


                    </tbody>
                </table>

                <div className="section"></div>
                <div className="section"></div>

                <p className="center-align"><b>Total : ${this.props.totalAmount}</b> </p>

                {/* Modal Trigger */}

                 <button data-target="modal2" className="btn modal-trigger blue">PROCEED TO CHECKOUT</button> 
              

                 <div id="modal2" className="modal" >
                    <div className="modal-content">
                    <div className="container">
                        <h4 className="center-align">Checkout</h4>
                        <p className="center-align">Payment will be collected with cash on delivery.</p>
                       <div className="divider"></div>
                       <input type="text" placeholder="Full Name" ref="fullname"/>
                       <input type="email" placeholder="Email" ref="userEmail"/>
                       <input type="text" placeholder="Address" ref="address"/>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <Link to="/thankyou" className="modal-close waves-effect waves-green btn-flat" onClick={this.submitOrder}>Submit Order</Link>
                    </div>
                </div> 

            </div>










        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount,

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCartItem,
        updateCart,
        getCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)