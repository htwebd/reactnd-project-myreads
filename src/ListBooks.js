import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {this.state.shelves.map((shelf, index) => (
                <div key={index} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.listBooksPerShelf(this.formatQueryString(shelf)).map((book) => (
                        <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(event) => this.props.onUpdateBook(book, event.target.value)}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author}</div>
                            </div>
                        </li>
                      ))}
                    </ol>
                  </div>
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
