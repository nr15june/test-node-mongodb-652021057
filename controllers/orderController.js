// Import Model
const Orders =require("../models/orders")
// Function add and export
exports.postOrders = async(req,res) => {
    try{
        const{customer_name,product,quantity,order_date,status } = req.body;
        const orders = new Orders({ customer_name,product,quantity,order_date,status });
        const saveOrders = await orders.save();
        res.status(201).json(saveOrders);
    }catch(err){
        res.status(500).json({message:err.message});
    }    
};

// Function update and export
exports.updateOrders = async (req,res) => {
    try{
        const {id} = req.params;
        const orders = await Orders.findById(id);
        if(!orders) return res.status(404).json({message:'Orders not found'});
        const update = req.body;
        Object.assign(orders,update);
        const updateOrders = await orders.save();
        res.json(updateOrders);    
    }catch (err){
        res.status(500).json({message: err.message});
    }
};

// Function delete and export
exports.deleteOrders = async (req,res) => {
    try{
        const {id} = req.params;
        const orders = await Orders.findById(id);
        if(!orders) return res.status(404).json({message:'Orders not found'});
        await Orders.findByIdAndDelete(id);
        res.json({message: 'Orders delete'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// Function get all data and export
exports.getOrders = async (req,res) => {
    try{
        const orders = await Orders.find();
        res.status(200).json(orders);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};

// Function get data by genre and export
exports.getOrdersProduct = async (req,res) =>{
    try{
        const {product}=req.params;
        const orders = await Orders.findOne({product: product});
        if (!orders) return res.status(404).json({message:'Orders not found'});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
