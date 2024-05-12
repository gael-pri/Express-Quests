const { body, validationResult } = require('express-validator');

const validateMovie = [
    body('titre').notEmpty(),
    body("titre").isLength({ max: 255 }),
    body('director').notEmpty(),
    body('year').notEmpty(),
    body('color').notEmpty(),
    body('duration').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = validateMovie;