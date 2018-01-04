const express = require('express')
 const chalk = require('chalk')
const app = express()

const port = process.env.PORT || 5000

app.get('/api/books', (req, res) => {
    let books = [
        { id: 1, name: 'Clean Code', price: 30.34},
        { id: 2, name: 'The Good Part JS', price: 20.34},
        { id: 3, name: 'Beggining Nodejs', price: 33.34},
        { id: 4, name: 'Practical Nodejs', price: 23.34},
    ]

    res.send(books)
})


app.listen(port, (req, res) => {
    console.log(chalk.green(`[server] started on port ${port}`))
})

