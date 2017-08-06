import React, { Component } from 'react'
import Book from './Book.js'

class Bookshelf extends Component {
  render() {
    const { books, onUpdateBook, shelf } = this.props

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.value}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book) => (
                    <div key={book.id}>
                        <Book book={book} onUpdateBook={onUpdateBook} />
                    </div>
                ))}
            </ol>
            </div>
        </div>
    )
  }
}

export default Bookshelf
