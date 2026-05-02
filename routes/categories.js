import express from 'express';
import { categories, getNextId } from '../data/storage.js';

const router = express.Router();

// GET all categories
router.get('/', (req, res) => {
    res.json(categories);
});

// POST new category
router.post('/', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }

    if (name.length < 3) {
        return res.status(400).json({ error: 'Category name must be at least 3 characters'} );
    }

    const newCategory = {
        id: getNextIf(categories),
        name
    };

    categories.push(newCategory);
    res.status(201).json(newCategory);
});

export default router;
