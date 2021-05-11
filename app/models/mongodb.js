const mongoose = require("mongoose");

const start_mongo = () => {
  mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

module.export = start_mongo;
