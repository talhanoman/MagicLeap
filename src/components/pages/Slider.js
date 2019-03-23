import React, { Component } from 'react';
import M from 'materialize-css'
import Bg from './media/nicebg.jpg'
import Bg2 from './media/bg2.jpg'
import Bg3 from './media/nicebg3.jpg'
import Bg4 from './media/bg01.jpeg'

class Slider extends Component {

  componentDidMount() {

    let selects = document.querySelectorAll('.slider');
    
    M.Slider.init(selects, {
      indicators : false ,
      height : 500,
    });
}

nxtSlide = (event)=>{
  let elem = event.currentTarget
  let instance = M.Slider.getInstance(elem);
  instance.next()
}


  render() {


    return (
      <div className="slider" onClick={this.nxtSlide}>
        <ul className="slides">
          <li>

            <img src={Bg2} alt="SLider-Images" />
            <div className="section"></div>
            <div className="caption center-align">
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
              <h3>Many Surpries on the Go!</h3>
              
            </div>
          </li>
          <li>
            <img src={Bg} alt="SLider-Images" />
            <div className="caption left-align">
              <div className="section"></div>
              <h3>Exclusive range of Products</h3>
              
            </div>
          </li>
          <li>
            <img src={Bg3} alt="SLider-Images" />
            <div className="section"></div>
            <div className="caption left-align">
            <div className="section"></div>
            <div className="section"></div>
              <h3>Consumer freindly purchase policy</h3>
              
            </div>
          </li>
          <li>
            <img src={Bg4} alt="SLider-Images" />
            <div className="section"></div>
            <div className="caption left-align">
            <div className="section"></div>
            <div className="section"></div>
              <h3>Customer's satisfaction the first priority</h3>
             
            </div>
          </li>

        </ul>
      </div>
    )
  }

}


export default Slider
