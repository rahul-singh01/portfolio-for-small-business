const app = require('express').Router();
const axios = require('axios')
const shop = require('../config/models/item')

app.get('/', (req, res) => {
    shop.find({}).sort({ _id: -1 }).limit(6).then(data => {
        res.render('navbar.ejs', {
            filename: "index.ejs",
            pagedata: { data }
        })
    })
})

app.get('/about', (req, res) => {
    res.render('navbar.ejs', {
        filename: "aboutus.ejs",
        pagedata: {}
    })
})

app.get('/productdetails/:id', (req, res) => {
    const id = req.params.id
    shop.findOne({ _id: id }, (err, result) => {
        shop.find({}).limit(3).then(data => {
            res.render('navbar.ejs', {
                filename: "productdetails.ejs",
                pagedata: { result, data }
            })
        })
    })

})

app.get('/allproducts', async(req, res) => {
    const data = await axios({
        method: 'GET',
        url: 'https://nanaksonssarees.vercel.app/api/v1/getitem'
    })
    main = data.data
    res.render('navbar.ejs', {
        filename: "products.ejs",
        pagedata: {
            data: main
        }
    })
})

app.get('/sarees', (req, res) => {
    // const type = req.params.type
    shop.find({type : "sarees"}).sort({_id : -1}).then(data=>{
        res.render('navbar.ejs', {
            filename: "itemdisplay.ejs",
            pagedata: {
                data,
                section : "SAREES"
            }
        })
    })
})
app.get('/lehenga', (req, res) => {
    shop.find({type : "lehenga"}).sort({_id : -1}).then(data=>{
        res.render('navbar.ejs', {
            filename: "itemdisplay.ejs",
            pagedata: {
                data,
                section : "LEHENGA"
            }
        })
    })
})
app.get('/suit', (req, res) => {
    shop.find({type : "suit"}).sort({_id : -1}).then(data=>{
        res.render('navbar.ejs', {
            filename: "itemdisplay.ejs",
            pagedata: {
                data,
                section : "SUIT"
            }
        })
    })
})

app.get('/checkout', (req, res) => {
    res.render('navbar.ejs', {
        filename: 'checkout.ejs',
        pagedata: {}
    })
})

app.get('/contact', (req, res) => {
    res.render('navbar.ejs', {
        filename: 'contact.ejs',
        pagedata: {}
    })
})

app.get('/testimonials', (req, res) => {
    res.render('navbar.ejs', {
        filename: 'testimonials.ejs',
        pagedata: {}
    })
})

app.get('/terms', (req, res) => {
    res.render('navbar.ejs', {
        filename: 'terms.ejs',
        pagedata: {}
    })
})

app.get('/additem', (req, res) => {
    res.render('additem.ejs')
})


module.exports = app;