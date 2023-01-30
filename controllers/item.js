const Item = require('../config/models/item')
const {base64encode , base64decode } = require('nodejs-base64')

const item_controller = ()=>{
    return{
        async additem(req,res){
            var {name , price , image , colour , tags , type} = req.body;
            name = `${name} | ( ${colour} ) | ${type}`
            if(name && price && image && colour || tags && type){
                tags = JSON.parse(base64decode(tags))
                const item = new Item({
                    name,
                    price : price.toString(),
                    image ,
                    colour,
                    tags,
                    type
                })
                const data = await item.save()
                res.json({status: 'successfully added !'})
            }else{
                res.json({status : 'error'});
            }

            
        },

        getitem(req,res) {
            Item.find({} , (err , result) => {
                res.json(result)
            })
        },

        async searchitem(req, res) {
            const title = req.params.title;
            var re = new RegExp(title, 'i');
            await Item.find({ name : re }).limit(10).sort({ _id: -1 }).then((ans) => {
                res.json(ans)
            })
        }
    }
}

module.exports = item_controller