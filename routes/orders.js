const express = require("express");
const router = express.Router();

// Import Controller
const {postOrders,updateOrders,deleteOrders,getOrders,getOrdersProduct} = require("../controllers/orderController");

// APIs Routing Config
router.post("/",postOrders);
router.put("/:id",updateOrders);
router.delete("/:id",deleteOrders);
router.get("/",getOrders);
router.get("/:product",getOrdersProduct);

// Export router
module.exports = router ;