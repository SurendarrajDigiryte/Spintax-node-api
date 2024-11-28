const { z } = require('zod');

const spintaxSchema = z.object({
  userInput: z.string().min(1, "User  input is required"),
  number: z.number().int().positive("Number must be a positive integer"),
});

const validateSpintaxInput = (data) => {
  return spintaxSchema.parse(data);
};

module.exports = {
  validateSpintaxInput,
};


// Zod based validation : sample