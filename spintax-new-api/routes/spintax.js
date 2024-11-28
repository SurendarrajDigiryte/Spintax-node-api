const express = require('express');
const router = express.Router();
const spinTaxService = require('../services/spintax.js');
const { validateSpintaxInput } = require('../models/spintax.js'); // zod validation

router.post('/spintax', async (req, res) => {
  try {
    console.log('spintax Initiated', req.body)
    const payload =req.body
    const validatedInput = validateSpintaxInput(payload);
    console.log('validatedInput', validatedInput)
    const result = await spinTaxService.generateSpintax(validatedInput.userInput, validatedInput.number);
    console.log('spintax End')
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
