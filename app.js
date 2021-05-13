var mongoose = require('mongoose')
var menu
var Menus
connectToDb()
createModel()
function connectToDb() {

    var uri = "mongodb://abhi:mummum%4027@cluster0-shard-00-00.szwhm.mongodb.net:27017,cluster0-shard-00-01.szwhm.mongodb.net:27017,cluster0-shard-00-02.szwhm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-n35fii-shard-0&authSource=admin&retryWrites=true&w=majority";

    mongoose.connect(uri);

    const connection = mongoose.connection;

    connection.once("open", function () {
        console.log("MongoDB database connection established successfully");
    });

}
function createModel() {
    const menuSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    //model
    Menus = mongoose.model('Menus', menuSchema)
    menu = new Menus({ name: 'chickn fry', price: 1000, Description: 'chickn', type: 'Main course' })

}
//schema

//save
function saveDb() {
    menu.save().then(result => {
        console.log("menu data", result)
    }).catch(error => {
        console.log("error", error)
    })
}
//find


function fetchMenu() {
    var menuArrName = []
    Menus.find().then(data => {
        //console.log("data", data)
        return data

    }).catch(error => {
        console.log("error=>", error)
    })
}

const express = require('express')
const app = express()
app.use(express.json());
var cors = require('cors')
app.use(cors())
app.options('*', cors())
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log("listning on port 3000")
})
app.get('/', (req, res) => {
    res.send("hello")
})
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})
app.get('/api/courses-details', (req, res) => {
    courseData = [{ id: 1, name: 'nodejs' }, { id: 2, name: 'mongodb' }]
    res.send(JSON.stringify(courseData))
})
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id)
})
app.get('/api/restro/menu', (req, res) => {
    Menus.find(function (error, result) {

        if (error) {
            return res.json({ status: false, message: 'Db fail....', error: error })
        }
        else {
            res.json({
                status: true, message: 'Db find Success...',
                result: result
            })
        }

    })
})
module.exports = server;