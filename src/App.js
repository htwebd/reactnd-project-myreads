import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then((data) => {
      window.location.reload()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
