export const validateTask = (req, res, next) => {
    const { title } = req.body;
    const errors = [];

    // Check if title exists
    if (!title) {
        errors.push('Title is required');
    }

    // Check title length
    if (title && title.length < 3) {
        errors.push('Title must at least 3 characters');
    }

    // Check title length max
    if (title && title.length > 100) {
        error.push('Title must be less than 100 characters');
    }

    //
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
}