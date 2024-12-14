// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully🟢');
  } catch (error) {
    console.error('MongoDB connection failed:🔴', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

//have to add in in ev
//MONGO_URI=mongodb://<username>:<password>@localhost:27017/mydatabase