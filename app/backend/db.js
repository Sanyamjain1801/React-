const mongoose = require("mongoose");
// const mongoURI ="mongodb://localhost:27017/"

// const connectToMongo = async ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to mongo");
//     }).then(()=>console.log("connection successful")).catch((error)=>console.log("error",error))
// }

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/portal", {
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;
