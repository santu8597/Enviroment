const express=require('express');
const router=express.Router();
const fetch = require('../middleware/fetch');
const Order=require('../models/Order')

router.post('/add',fetch,async (req,res)=>{
    const {product1,product2,product3,product4}=req.body
    const order=new Order({
        product1,product2,product3,product4,user:req.user.id
    })
    const orders=await order.save()
    res.json(orders)
})


module.exports=router