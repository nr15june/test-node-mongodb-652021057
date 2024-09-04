const mongoose = require("mongoose");

// Define Schame wit timestamps and disable versionKey
const ordersSchema = new mongoose.Schema({
    customer_name:{type:String , require:true},
    product:{type:String , require:true},
    quantity:{type:Number , require:true},
    order_date:{type:String , require:true},
    status:{type:String , require:true},
},
{
    timestamps:true,versionKey:false
});

// Define Model
const Orders = mongoose.model('Orders',ordersSchema);

// Export Model
module.exports = Orders
