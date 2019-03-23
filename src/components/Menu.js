import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import M from 'materialize-css'
import axios from 'axios';


class Menu extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    let email = this.refs.email.value
    if (email) {
      axios.post('/email', { email })
        .then((res) => {
          console.log("Subscribed Successfully " + res.data)
          let subscribe = this.refs.subscribe
          let menuSubscribe = this.refs.subscribes
          menuSubscribe.innerHTML = 'Subscribed'
          menuSubscribe.className = "btn waves-effect green accent-4"
          subscribe.innerHTML = 'Subscribed'
          subscribe.className = "btn waves-effect green accent-4"
        })
        .catch((err) => {
          if (err) {
            throw err
          }
        })
    }
  }
  componentDidMount() {

    let selects = document.querySelectorAll('.sidenav');
    M.Sidenav.init(selects);

    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
      startingTop: "3%",
      endingTop: "20%",
      preventScrolling: true
    });
  }
  render() {
    const modalStyle = {
      zIndex: '14'
    }
    const menuStyle = {
      position: 'fixed',
      zIndex: '3'
    }
    return (
      <div >


        <nav className="grey darken-4 top-navbar" style={menuStyle} >
          <div className="nav-wrapper">
            <div className="container">
              <a href="/" className="brand-logo">MagicLeap</a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger">{(this.props.totalQty > 0) ? (<span className=" badge  pink accent-3 white-text">{this.props.totalQty}</span>) : ('')}<i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">


                <li><Link to='/cart'>Cart{(this.props.totalQty > 0) ? (<span className="new badge  pink accent-3 white-text">{this.props.totalQty}</span>) : ('')}</Link></li>
                <li><Link to='/Contact'>About Us</Link></li>
                <li><Link to='/'><button data-target="modal1" className="btn modal-trigger blue" ref="subscribes" >Subscribe</button></Link></li>

              </ul>
            </div>
          </div>
        </nav>
        <ul id="mobile-demo" className="sidenav grey darken-4">

          <div className="section"></div>
          <li className="center-align">  <img src="http://www.abnewswire.com/uploads/46f61fdc13a1e28ab40c7d53579220d6.png" alt="" width="150px" /></li>
          <div className="section"></div>

          <li><Link to="/" className="waves-effect"><i className="material-icons">favorite_border</i>Products</Link></li>
          <div className="section"></div>
          <li><Link to="cart" className="waves-effect"><i className="material-icons">add_shopping_cart
</i>Cart{(this.props.totalQty > 0) ? (<span className="new badge pink accent-3">{this.props.totalQty}</span>) : ('')}</Link></li>
          <div className="section"></div>
          <li><Link to="/contact" className="waves-effect"><i className="material-icons">group</i>About-Us</Link></li>
          <div className="section"></div>
          <li><div className="divider"></div></li>
          <div className="section"></div>
          <li><Link to='/'><button data-target="modal1" className="btn modal-trigger blue" ref="subscribe" style={{ width: '250px' }}>Subscribe</button></Link></li>
        </ul>

        <div id="modal1" className="modal">
          <div className="modal-content" style={modalStyle}>
            <h4>Subscribe to our newsletter!</h4>
            <p>Enter your email for subscription! </p>
            <input type="email" placeholder="Email" ref="email" required={true} />
          </div>
          <div className="modal-footer">
            <Link to="/" onClick={this.handleSubmit} className="modal-close waves-effect waves-green btn-flat">Submit</Link>
          </div>
        </div>


      </div>



    )
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  }

}
export default connect(mapStateToProps)(Menu)