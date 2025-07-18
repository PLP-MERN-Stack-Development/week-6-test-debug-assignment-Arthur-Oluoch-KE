import express from 'express';
import Bug from '../models/Bug.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const bug = new Bug(req.body);
  await bug.save();
  res.status(201).json(bug);
});

router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

router.patch('/:id', async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bug);
});

router.delete('/:id', async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
