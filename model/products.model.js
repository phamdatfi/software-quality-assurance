//model mongo
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
    {    
        _id: String,
        title : String,
        category_id: {
            type: String, 
            default: "",
        },
        description: String,
        brand_id: String,
        type: String,
        color: String,
        price: Number,
        size: [Number],
        discountPercentage: Number,
        stock: Number,
        soldQuantity: { type: Number, default: 0 },
        ratings: [{ type: Number, min: 0, max: 5 }],
        thumbnail: String,
        status: String,
        featured: String,        
        position: Number,
        createBy :{
            accountId: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        },
        slug: {
            type: String,
            slug:"title",
            unique: true
        },
        deleted: {
            type: Boolean,
            default: false
        },   
        deletedBy:{
            accountId: String,
            deletedAt: Date
        },
        updatedBy:[
            {
                accountId: String,
                updatedAt: Date
            }
        ],
        deletedBy:[
            {
                accountId: String,
                deletedAt: Date
            }
        ],
        restoredBy:[
            {
                accountId: String,
                restoredAt: Date
            }
        ],
    },
);

const product = mongoose.model('product',productSchema,"Products")

module.exports = product;