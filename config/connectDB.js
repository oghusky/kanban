const mongoose = require('mongoose');

exports.connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/kanban", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  if (connection) console.log("Connected to DB")
  else console.log("Can't connect to DB");
}