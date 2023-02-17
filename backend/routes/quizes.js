const express = require('express');
const { getAll, get, add, replace, remove } = require('../data/quiz');
const router = express.Router();
router.get('/', async (req, res, next) => {
    try {
      const events = await getAll();
      res.json({ events: events });
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/:id', async (req, res, next) => {
    try {
      const event = await get(req.params.id);
      res.json({ event: event });
    } catch (error) {
      next(error);
    }
  });