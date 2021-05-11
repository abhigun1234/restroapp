const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restro').then(
    () => console.log("connected to mongodb")).catch(error => {

        console.log("getting error", error)
    })

//schema

const menuSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
//model
const Menus =mongoose.model('Menus', menuSchema)

async function createMenu() {

    const menu = new Menus({ name: 'dal makahni', price: 1000, Description: 'spacil amritsar dal makhani', type: 'Main course' })
    //save
    const result = await menu.save()
    console.log(result)

}

createMenu()