import React, {Component} from 'react'
import './Book.css'

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

     componentDidMount() {
        fetch('/api/books')
            .then(res => res.json())
            .then(books => this.setState({ books }))
    }
    render() {
        return (
        <div>
            <h2>Books</h2>
            <ul>
                {this.state.books.map((book, index) => <li key={index} >{book.name}</li> )}
           </ul>
        </div>  
        )
    }
}
export default Books