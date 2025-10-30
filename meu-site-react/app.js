const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

// Servir build estático
app.use(express.static(path.join(__dirname, 'build'), { maxAge: '1d' }));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Probel BF app running on port ${PORT}`);
});