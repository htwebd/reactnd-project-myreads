import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import keyIndex from 'react-key-index'
import Bookshelf from '../components/Bookshelf.js'

class ListBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelves: [
        "Currently Reading",
        "Want to Read",
        "Read"
      ]
    }
  }

  formatQueryString = (str) => {
    let string = str.split(" ").map((word) => { return `${word.charAt(0).toUpperCase()}${word.slice(1)}`}).join().replace(/\s*,\s*|\s+,/g, "");
    return `${string.charAt(0).toLowerCase()}${string.slice(1)}`
  }

  listBooksPerShelf = (query) => {
    return this.props.books.filter((book) => { return book.shelf === query})
  }

  render() {
    const shelves = keyIndex(this.state.shelves, 1)
 
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelves.map((shelf) => (
                <div key={shelf.id}>
                  <Bookshelf 
                    books={this.listBooksPerShelf(this.formatQueryString(shelf.value))} 
                    onUpdateBook={this.props.onUpdateBook}
                    shelf={shelf}
                  />
                </div>
              ))}
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )
  }
}

export default ListBooks
