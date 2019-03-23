import React, { Component } from 'react'
import M from 'materialize-css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { postBooks, deleteBooks, getBooks } from '../../actions/booksActions'

class BooksForm extends Component {

    state = {
        images: [{}],
        img: "",
    }

    componentDidMount() {
        this.props.getBooks();
        M.updateTextFields();

       

            var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
    }
    handleSubmit() {
        const book = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            images: this.refs.images.value,
            price: this.refs.price.value,


        }
        this.props.postBooks(book)
    }

    onDelete() {
        let bookId = this.refs.delete.value
        this.props.deleteBooks(bookId)
    }




    render() {

        const booksList = this.props.books.map((book) => {
            return (
                <option key={book._id}>{book._id}</option>
            )
        })

      

        return (

            <div className="container">
                <div className="card">
                    <div className="row">


                       
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Enter Title!" id="Title" type="text" className="validate" ref="title"/>
                                    <label htmlFor="Title">Title</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="Price" type="text" className="validate" placeholder="Enter Price"  ref="price"/>
                                    <label htmlFor="Price">Price</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="description" className="materialize-textarea" ref="description"></textarea>
                                    <label htmlFor="description">Description</label>
                                </div>
                            </div>
                            <div className="input-field col s12">
                                    <input id="URL" type="text" className="validate" placeholder="Enter Image URL"  ref="images"/>
                                    <label htmlFor="URL">Image URL</label>
                                </div>
                            <button className="btn red" onClick={this.handleSubmit.bind(this)}>Post Book</button>
                        

                        
                            <div className="input-field col s12" ref="delete">
                                <select value="">
                                    <option  disabled selected>Select a book to delete!</option>

                                    {booksList}
                                   
                                </select>
                                <label>Book Delete</label>
                                <button className="btn red" ref="delete" onClick={this.onDelete.bind(this)}>Delete</button>
                            </div>
                           
                    </div>
                </div>
            </div>
         

           
                    )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postBooks,
        deleteBooks,
        getBooks
    }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)