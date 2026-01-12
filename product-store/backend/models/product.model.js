import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    price: {
        type:Number,
        required:true
    },
    image: {
        type: String,
        required:true
    },
}, {
    timestamps:true, // createdAt, updatedAt
});


const Product = mongoose.model('Product', productSchema);
// why call Product? Mongoose will convert it into products
export default Product;