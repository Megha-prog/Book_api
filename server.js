const express = require('express');
const serverConfig =require('./configs/server.config');
const bodyParser = require('body-parser');

const db = require('./models');
const app = express();

app.use(bodyParser.json());
const Book = db.book;


console.log(Book);
db.sequelize.sync({ force: true }).then(() => {
    console.log('tables dropped and recreated');
}).catch(err => {
    console.log("Error while initializing ategories table");
})
//route calling from route


require('./routes/book.route')(app);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Application started on the port no : ${serverConfig.PORT}`);


})

