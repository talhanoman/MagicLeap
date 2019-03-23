import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'


// Import Components
import BooksList from './components/pages/BooksList'
import Cart from './components/pages/Cart'
import BooksForm from './components/pages/BooksForm'
import Menu from './components/Menu'
import Footer from './components/Footer'


// Import Css files
import './css/materialize.css'
import './App.css'

// Importing Combine Reducers
import reducers from './reducers/index'
import Thankyou from './components/pages/Thankyou';
import Contact from './components/pages/Contact';







// STEP 1 CREATE THE STORE
const middleware = applyMiddleware( thunk ,logger)
const store = createStore(reducers, middleware)


class App extends Component {

  render() {

    return (
      <Provider store={store}>

        <Router >
          <div>
            <Menu />
            <div className="section"></div>
            <div className="section"></div>

            <Switch>


              <Route exact path='/' component={BooksList} />
            
              <Route path='/admin' component={BooksForm} />
              
              <Route path='/cart' component={Cart} />
              <Route path='/contact' component={Contact} />
              <Route path='/thankyou' component={Thankyou}/>
              




            </Switch>
            <div className="section"></div>
            <Footer />
          </div>
        </Router>

      </Provider>

    );
  }
}



export default App;
