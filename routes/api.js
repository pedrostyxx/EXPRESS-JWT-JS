const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Olá, mundo!' });
});

router.post('/data', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

module.exports = router;
