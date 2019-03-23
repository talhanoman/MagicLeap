import React, { Component } from 'react';

class Footer extends Component {

    render() {

        return (
            <footer className="page-footer grey darken-4 " id="Contact" >
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">About MagicLeap</h5>
                            <p className="grey-text text-lighten-4">MagicLeap is an outstanding e-commerce venture, enabling the customers to experience the best of online shopping. With its extensive and exclusive range of products, along with its consumer-friendly purchase policy. On this spectacular platform of cyber trade, you will find an endless collection of quality products in numerous categories such as computers, IT, gadgets, and many more. The product prices which are unimaginably economic in order to keep customer's satisfaction the first priority.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Contact Us</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/talha.noman.5">Facebook</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/talhanoman/">Instagram</a></li>
                                <li><a className="grey-text text-lighten-3" href="mailto:talhanoman61@gmail.com">Gmail</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">Github</a>
                    </div>
                </div>
            </footer>
        )
    }


}

export default Footer