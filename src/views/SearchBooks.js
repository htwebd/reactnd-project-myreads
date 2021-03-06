import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  render() {    
    const { searchResult, onSearchBooks, onUpdateBook } = this.props

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className='close-search' to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        onChange={(event) => onSearchBooks(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResult && searchResult.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(event) => onUpdateBook(book, event.target.value)}>
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
    )
  }
}

export default SearchBooks
