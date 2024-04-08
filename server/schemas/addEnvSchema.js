const { body } = require("express-validator");

const addEnvSchema = [
  body("name")
    .isLength({ min: 1, max: 32 })
    .withMessage("Name must be less than 32 characters"),
  body("env_data"),
];

module.exports = { addEnvSchema };
