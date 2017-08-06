import React from 'react'
import { Route } from 'react-router-dom'
import keyIndex from 'react-key-index'
import ListBooks from './views/ListBooks.js'
import SearchBooks from './views/SearchBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchResult: []
    }
    this.searchBooks = this.searchBooks.bind(this)
    this.updateBook = this.updateBook.bind(this)
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  searchBooks(query) {
    query && BooksAPI.search(query).then((searchResult) => {
      if(searchResult.length > 0){
        this.setState({ searchResult })
      } else {
        this.setState({ serachResult: [] })
      }
    })
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then((data) => {
      this.getAllBooks();
    })
  }

  render() {
    const books = keyIndex(this.state.books, 1)

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks 
            searchResult={this.state.searchResult}
            onSearchBooks={this.searchBooks}
            onUpdateBook={this.updateBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
