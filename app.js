const bcrypt = require('bcrypt')
var salt
bcrypt.genSalt(10).then(res => {
    console.log(res)
    salt = res
    bcrypt.hash("123456", salt).then(res1 => {

        console.log('hased', res1)
    }).catch(error => {
        console.log("error", error)
    })

}).catch(error => {

    console.log("error", error)
})










// const {User}=require('./user')
var mongoose = require('mongoose')
var menu
var Menus
connectToDb()
createModel()

function connectToDb() {

    var uri = "mongodb://abhi:mummum%4027@cluster0-shard-00-00.szwhm.mongodb.net:27017,cluster0-shard-00-01.szwhm.mongodb.net:27017,cluster0-shard-00-02.szwhm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-n35fii-shard-0&authSource=admin&retryWrites=true&w=majority";
    //    var uri='mongodb://localhost:27017/restrorent'
    //hellol
    mongoose.connect(uri);

    const connection = mongoose.connection;

    connection.once("open", function () {
        console.log("MongoDB database connection established successfully");
    });

}

function createModel() {
    const menuSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    // const userSchema=new mongoose.Schema({name: String, email: String, phone_no: String, message: String })

    //model
    Menus = mongoose.model('Menus', menuSchema)
    //menu = new Menus({ name: 'chickn fry', price: 1000, Description: 'chickn', type: 'Main course' })

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
//post data
app.post('/adduser', function (req, res) {
    const productDetails = req.body;
    var User = mongoose.model('User', new mongoose.Schema({ name:{ type:String,required:true,minlength:5,maxlength:50}, 
        email:{type:String,required:true,minlength:5,maxlength:50,unique:true} ,
        password:{type:String,required:true,minlength:5,maxlength:50} 
    }))
    User.findOne({email:req.body.email}).then(res=>{

    }).catch(error=>{console.log(error)})
    user =new User ({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password  
    })
    if(user){
        return res.status(400).send('User alredy regestred')
    }
    else{


             user.save().then(result => {
                console.log("user", result)
             }).catch(error => {
                 console.log("error", error)
             })
             res.send(user)
    }
    // console.log("productDetails", productDetails)
    // var product_name = req.body.product_name
    // var product_price = req.body.product_price
    // var product_desc = req.body.product_desc
    // console.log("product_name",product_name)
    // console.log("product_price",product_price)
    // console.log("product_name",product_desc)
    // const productSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    // Products = mongoose.model('Product', productSchema)
    // product = new Products({ product_name: product_name, 
    //     product_price: product_price, product_desc: product_desc})
    //     console.log("product",product)
    //     product.save().then(result => {
    //     console.log("product data", result)
    // }).catch(error => {
    //     console.log("error", error)
    // })
 res.send("done")

})
app.get('/', (req, res) => {
    res.send("hello")
})
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})
app.get('/api/auth', (req, res) => {
    res.send('GYgYXBpL2J1eSJ9.43DXvhrwMGeLLlP4P4izjgsBB2yrpo82oiUPhADakLs')
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
//post data
app.post('/addproduct', function (req, res) {
    const productDetails = req.body;
    console.log("productDetails", productDetails)
    var product_name = req.body.product_name
    var product_price = req.body.product_price
    var product_desc = req.body.product_desc
    console.log("product_name",product_name)
    console.log("product_price",product_price)
    console.log("product_name",product_desc)
    const productSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    Product = mongoose.model('Product', productSchema)
    product = new Product({ product_name: req.body.product_name, 
        product_price: req.body.product_price, product_desc: req.body.product_desc})
        console.log("product",product)
        product.save().then(result => {
        console.log("product data", result)
        res.send("done")
    }).catch(error => {
        console.log("error", error)
    })


})
module.exports = server;