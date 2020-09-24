const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  () => {
    console.log("You connected to the database.");
  }
);
