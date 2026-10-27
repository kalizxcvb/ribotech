const bcrypt = require('bcryptjs');
const { getDb } = require('../lib/db');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password are required.' });

  try {
    const db = getDb();

    const { data: user, error } = await db
      .from('users').select('email, password').eq('email', email).maybeSingle();
    if (error) throw error;

    if (!user)
      return res.status(401).json({ error: 'No account found with that email.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ error: 'Incorrect password.' });

    return res.json({ success: true, email: user.email });
  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
};
