const { body, validationResult } = require('express-validator');

const validateUser = [
  body('firstname').notEmpty(),
  body('lastname').notEmpty(),
  body('email').notEmpty(),
  body('city').notEmpty(),
  body('language').notEmpty(),
  body("email").isEmail(),
  body("firstname").isLength({ max: 255 }),
  body("lastname").isLength({ max: 255 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = validateUser;