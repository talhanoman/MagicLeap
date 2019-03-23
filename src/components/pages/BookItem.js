import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart } from '../../actions/cartActions'
import { updateCart } from '../../actions/cartActions'

class BookItem extends Component {
    handleCart() {
        const book = [...this.props.cart, {
            _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            images: this.props.images,
            price: this.props.price,
            quantity: 1,
        }]
        if (this.props.cart.length > 0) {

            //CART IS NOT EMPTY
            let _id = this.props._id

            let cartIndex = this.props.cart.findIndex(function (cart) {

                return cart._id === _id


            })
            // IF -1 means no same item _id
            if (cartIndex === -1) {
                this.props.addToCart(book)

            } else {
                // WE NEED TO UPDATE QUANTITY
                this.props.updateCart(_id, 1, this.props.cart)
            }
        } else {
            // IF EMPTY
            this.props.addToCart(book)
        }

    }
    render() {

        return (

            
                <div className="card medium sticky-action" >
                    

                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={this.props.images} alt="this.props" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
                            <h6>${this.props.price}</h6>
                            <div className="card-action">
                            <button className="btn waves-effect waves-light blue " onClick={this.handleCart.bind(this)}>Add To Cart</button>
                            </div>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
                            <p>{this.props.description}</p>
                            <h6>${this.props.price}</h6>
                        </div>
                    </div>

               
            

        
        )
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addToCart,
            updateCart
        }, dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem)