import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Thankyou extends Component {
  render() {
    return (
      <div className="container">
          <div className="section"></div>
        <h3 className="center-align">Thank You!</h3>
        <h6 className="center-align">Your Order has been placed, you'll recieve a email for Confirmation!</h6>
        <div className="section"></div>
        <div className="row">
        <div className="col s4 m4"></div>
       
        <Link to='/'><button className="btn waves-effect  blue-grey darken-4 " style={{width: "300px"}}>Back To Products</button>
        </Link></div>
        
      </div>
    )
  }
}
