// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const projectRoutes = require('./routes/projectRoutes');
const clientRoutes = require('./routes/clientRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');
const subscriberRoutes = require('./routes/subscriberRoutes');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/subscribers', subscriberRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected 🟢');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error(err));