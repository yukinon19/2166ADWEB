// import all packages installed
var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//Create an instance of express app
var app = Express();
// Make use of the CORS module
app.use(cors());

// Indicate the connection string from mongodb
var CONNECTION_STRING = "mongodb+srv://jppangilinan1:Admin12345@cluster0.ib1fu0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Indicate the name of the database
var DATABASENAME = "MyDb";

// Instantiate the mongodbclient
var database;

// Create a listener
app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error,client) => {
        database=client.db(DATABASENAME);
        console.log('Yay!')
    })
})

// Get all dbase data
app.get('/api/books/GetBooks', (req,res) => {
    database.collection("books").find({}).toArray((error,result) => {
        res.send(result);
    })
})

app.post('/api/books/AddBook', multer().none(), async (req,res) => {
    try {
        const numOfDocs = await database.collection("books").countDocuments();
        const price = parseInt(req.body.price);
        if (isNaN(price)){
            throw new Error('Invalid price format');
        }
        await database.collection("books").insertOne({
            id:(numOfDocs + 1),
            title: req.body.title,
            description: req.body.description,
            price: price
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});

app.delete('/api/books/DeleteBook', async (req, res) => {
    try {
        const result = await database.collection("books").deleteOne({
            id: parseInt(req.query.id) 
        });

        if (result.deletedCount === 1) {
            res.json("Deleted successfully!");
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Failed to delete book" });
    }
});
