
import React, { Component } from 'react'
import { getBooks, getCategory } from '../../actions/booksActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from './Slider'
import { Link } from 'react-router-dom'


import BookItem from './BookItem'






class BooksList extends Component {




  componentDidMount(category) {
    // Dispatch an action
    this.props.getCategory(category)
  }
  render() {
    const booksList = this.props.books.map((book) => {
      return (

        <div className="container" key={book._id}>
          <div className="col s12 m4 l4 xl4" key={book._id}>

            <BookItem
              _id={book._id}
              title={book.title}
              description={book.description}
              images={book.images}
              price={book.price} />
          </div>
        </div>

      )
    })
    return (
      <div>


        <Slider />
        <div className="Products">
          <div className="section"></div>
          <h3 className="center-align">Featured Products</h3>
          <div className="section"></div>
          <div className="container">
            <div className="row productList center-align">
              <div className="col m2">
                <Link to="/Cameras" > <li className="categories">Cameras</li></Link>
              </div>
              <div className="col m2">
                <Link to="/Computers" > <li className="categories">Computers</li></Link>
              </div>
              <div className="col m2">
                <Link to="/Phones"> <li className="categories">Phones</li></Link>

              </div>
              <div className="col m2">
                <Link to="/Tablets"> <li className="categories">Tablets</li></Link>

              </div>
              <div className="col m2">
                <Link to="/Watches"> <li className="categories">Watches</li></Link>

              </div>
              <div className="col m2">
                <Link to="/Others"> <li className="categories">Others</li></Link>

              </div>


            </div>
          </div>
        </div>

        <div className="section"></div>
        <div className="row">
          {booksList}

        </div>
      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    books: state.books.books,
    newbooks  : state.books.newbooks
    
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks,
    getCategory

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList)