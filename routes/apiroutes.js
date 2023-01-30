const app = require('express').Router();

const item_controller = require('../controllers/item')
app.post('/additem' , item_controller().additem)
app.get('/getitem' , item_controller().getitem)
app.get('/searchitem/:title', item_controller().searchitem)

const mail_controller = require('../controllers/mail');
app.post('/sendmail' , mail_controller().sendmail);

module.exports = app;