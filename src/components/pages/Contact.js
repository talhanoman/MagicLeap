import React, { Component } from 'react'
import portrait from './media/myImg.jpg'

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
      <div className="section"></div>
        <div className="row">
        <div className="col m6">
        <h4>About the author!</h4>
        <h6>Greetings Users!</h6>
<p>My name is Talha Noman and I am the author of this website.
    I have used Materialize Css for the designing and MERN Stack technologies for the backend and server size.
I am currently doing Inter in computer science and with it am trying my luck in coding.
I have done several web designing and development projects
Till now I have learnt MERN technology, and some frameworks like materialize Css and React BootStrap.
Desperate to learn more about web technologies.
Any Suggestions or reviews about this Single Page Application would be highly appreciated! <br/>
For Queries  : <br/>
<a href="mailto:talhanoman61@gmail.com">Mail Me!</a> <br/>
Or <br/>
 Reach me out on other social Networks : <br/>
 <a href="https://www.facebook.com/talha.noman.5">Facebook</a> <br/>
 <a href="https://www.instagram.com/talhanoman/">Instagram</a>

</p>
        </div>
        <div className="col m6">
        <img src={portrait} alt="Portifolio"  className=" circle responsive-img" />
        </div>
        </div>
      </div>
    )
  }
}
