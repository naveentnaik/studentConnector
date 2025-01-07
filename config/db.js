const mongooose = require("mongoose");

const connectdb = async () => {
  try {
    await mongooose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectdb;
