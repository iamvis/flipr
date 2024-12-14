// controllers/clientController.js
const Client = require('../models/Client');

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve clients' });
  }
};

const createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create client' });
  }
};

const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update client' });
  }
};

const deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndRemove(req.params.id);
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete client' });
  }
};

module.exports = { getClients, createClient, updateClient, deleteClient };