const express = require('express');
const Subscriber = require('../models/subscriber');

const router = express.Router();

// Create a new subscriber
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required' });
    }

    const newSubscriber = new Subscriber({ name, email });
    const savedSubscriber = await newSubscriber.save();

    res.status(201).json(savedSubscriber);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Server error', error });
    }
  }
});

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
