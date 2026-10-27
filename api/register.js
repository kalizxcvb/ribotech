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
  if (password.length < 6)
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });

  try {
    const db = getDb();

    const { data: existing, error: findErr } = await db
      .from('users').select('id').eq('email', email).maybeSingle();
    if (findErr) throw findErr;
    if (existing)
      return res.status(409).json({ error: 'An account with that email already exists.' });

    const hashed = await bcrypt.hash(password, 10);
    const { error: insertErr } = await db.from('users').insert({ email, password: hashed });
    if (insertErr) {
      if (insertErr.code === '23505')
        return res.status(409).json({ error: 'An account with that email already exists.' });
      throw insertErr;
    }

    return res.json({ success: true, message: 'Account created! You can now log in.' });
  } catch (err) {
    console.error('Register error:', err.message);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
};
