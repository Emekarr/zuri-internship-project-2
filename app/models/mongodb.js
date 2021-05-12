const mongoose = require("mongoose");

const start_mongo = () => {
  mongoose.connect(process.env.MONGOKEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

module.exports = start_mongo;
