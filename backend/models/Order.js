const mongoose=require('mongoose');
const {Schema}=mongoose;
const OrderSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    product1:{
        type:Number,
        required:true
    },
    product2:{
        type:Number,
        required:true
    },
    product3:{
        type:Number,
        required:true
    },
    product4:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})
module.exports=mongoose.model('order',OrderSchema);