const mongoose = require('mongoose')
const Schema = mongoose.Schema

set = {
    visible : true
}

const Item = new Schema({
    name: { type: 'String', required: true , minlength : 1},
    price : { type: 'string', required: true, },
    image : { type: 'string', required: true, },
    colour : { type: 'string', required: true },
    type : { type: 'string', required: true },
    tags : { type: 'object' },
    set: { type: 'object', default: set }
}, { timestamps: true });

module.exports = mongoose.model('Item', Item)