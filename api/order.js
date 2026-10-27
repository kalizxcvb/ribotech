const { getMailer } = require('../lib/mailer');

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { email, orderNumber, items, total } = req.body || {};

  if (!email || !orderNumber || !Array.isArray(items) || items.length === 0)
    return res.status(400).json({ error: 'Missing order data.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email)))
    return res.status(400).json({ error: 'Invalid email address.' });
  if (items.length > 50)
    return res.status(400).json({ error: 'Too many items.' });

  const itemRows = items.map(item => {
    const qty = Number(item.qty) || 1;
    const price = Number(item.price) || 0;
    return `<tr>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;">${esc(item.name)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;text-align:center;">x${qty}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #2a2a2a;text-align:right;">&#8369;${(price * qty).toLocaleString('en-PH')}</td>
    </tr>`;
  }).join('');

  const safeEmail = esc(email);
  const safeOrder = esc(orderNumber);

  const mailOptions = {
    from: `"RiboTech" <${process.env.GMAIL_USER}>`,
    to: String(email),
    subject: `Thank you for your order! – ${String(orderNumber).slice(0, 40)}`,
    html: `
      <div style="background:#090909;color:#f4f4ef;font-family:'Trebuchet MS',sans-serif;padding:40px;max-width:600px;margin:0 auto;border-radius:10px;">
        <div style="text-align:center;margin-bottom:32px;">
          <h1 style="color:#c9a84c;font-family:Georgia,serif;font-size:36px;margin:0;">Ribo<span style="color:#f4f4ef;">Tech</span></h1>
        </div>

        <h2 style="color:#f4f4ef;margin-bottom:8px;">Thank you for your order!</h2>
        <p style="color:#888;margin-bottom:24px;">Hi <strong style="color:#f4f4ef;">${safeEmail}</strong>, your order has been received and is being processed.</p>

        <div style="background:#111;border:1px solid #2a2a2a;border-radius:8px;padding:20px;margin-bottom:24px;">
          <p style="color:#888;font-size:13px;margin:0 0 4px;">Order Number</p>
          <p style="color:#c9a84c;font-size:20px;font-weight:bold;margin:0;">${safeOrder}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <thead>
            <tr style="background:#181818;">
              <th style="padding:10px 12px;text-align:left;color:#888;font-weight:normal;font-size:13px;">Item</th>
              <th style="padding:10px 12px;text-align:center;color:#888;font-weight:normal;font-size:13px;">Qty</th>
              <th style="padding:10px 12px;text-align:right;color:#888;font-weight:normal;font-size:13px;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemRows}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding:12px;text-align:right;color:#888;">Total:</td>
              <td style="padding:12px;text-align:right;color:#c9a84c;font-size:18px;font-weight:bold;">&#8369;${(Number(total) || 0).toLocaleString('en-PH')}</td>
            </tr>
          </tfoot>
        </table>

        <div style="background:#111;border:1px solid #2a2a2a;border-radius:8px;padding:16px;margin-bottom:24px;">
          <p style="margin:0;color:#888;font-size:13px;"><strong style="color:#f4f4ef;">Free Shipping</strong> — Your order will be delivered within 3–5 business days.</p>
        </div>

        <p style="color:#888;font-size:13px;text-align:center;">Questions? Reply to this email or visit <a href="https://www.facebook.com/gian.zxcvb" style="color:#c9a84c;">RiboTech</a>.</p>
        <p style="color:#444;font-size:12px;text-align:center;margin-top:24px;">© RiboTech. All rights reserved.</p>
      </div>
    `,
  };

  try {
    // Must finish before responding: serverless functions pause after the response is sent.
    await getMailer().sendMail(mailOptions);
    return res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err.message);
    return res.status(500).json({ error: 'Order placed but email failed to send.' });
  }
};
