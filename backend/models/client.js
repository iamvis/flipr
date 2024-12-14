// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String, required: true },
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;