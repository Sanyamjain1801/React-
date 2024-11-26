const cors = require("cors");
const connectDb = require("./db");
const express = require("express");
connectDb();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
// app.use('/api/auth',require('./routes/auth'))
app.use("/api/data", require("./routes/data"));

app.listen(port, () => {
  console.log("hiiiiiiiiiiiii");
});
