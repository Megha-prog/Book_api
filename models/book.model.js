module.exports = (sequelize, Sequelize) => {

    const Book = sequelize.define("book", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        releasedate: {
            type: Sequelize.STRING,
            allowNull: false
        }, 
        publisher: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: 'books'

    })
    return Book;
}