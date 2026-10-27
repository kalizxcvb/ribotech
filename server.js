// Local development server. On Vercel, the files in /api run as serverless
// functions and /public is served as static files, so this file is not used there.
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.all('/api/register', require('./api/register'));
app.all('/api/login', require('./api/login'));
app.all('/api/order', require('./api/order'));

// Only /public is exposed (never server.js, .env, etc.)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RiboTech server running at http://localhost:${PORT}/`);
});
