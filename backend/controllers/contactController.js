// controllers/contactController.js
const Contact = require('../models/contact');

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve contacts' });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create contact' });
  }
};

const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update contact' });
  }
};

const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete contact' });
  }
};

module.exports = { getContacts, createContact, updateContact, deleteContact };