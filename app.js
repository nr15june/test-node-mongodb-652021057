const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
dotenv.config();

// MongoDB Config
mongoose.connect(process.env.MONGO_URI,{
}).then(()=>console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routing Config
const ordersRouter = require ("./routes/orders")
app.use("/api/orders",ordersRouter)

// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
