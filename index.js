const express = require("express");
const connection = require("./config/db");
const productRoute = require("./routes/products.route");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/product' , productRoute)
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error in connecting to DB");
  }
  console.log(`Server is listen on ${PORT}`);
});
