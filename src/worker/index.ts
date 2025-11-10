import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator';
import { CreateContactMessageSchema, CreateDonationSchema } from '../shared/types';

const app = new Hono<{ Bindings: Env }>();

// Enable CORS
app.use('*', async (c, next) => {
  await next();
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type');
});

app.options('*', (c) => {
  return c.body(null, 204);
});

// Get latest news posts
app.get('/api/news', async (c) => {
  const db = c.env.DB;
  const { results } = await db.prepare(`
    SELECT * FROM news_posts 
    WHERE is_published = 1 
    ORDER BY created_at DESC 
    LIMIT 10
  `).all();
  
  return c.json(results);
});

// Submit contact message
app.post('/api/contact', zValidator('json', CreateContactMessageSchema), async (c) => {
  const data = c.req.valid('json');
  const db = c.env.DB;
  
  const { success } = await db.prepare(`
    INSERT INTO contact_messages (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `).bind(data.name, data.email, data.phone || null, data.message).run();
  
  if (success) {
    return c.json({ success: true, message: 'ההודעה נשלחה בהצלחה' });
  } else {
    return c.json({ success: false, message: 'שגיאה בשליחת ההודעה' }, 500);
  }
});

// Submit donation
app.post('/api/donations', zValidator('json', CreateDonationSchema), async (c) => {
  const data = c.req.valid('json');
  const db = c.env.DB;
  
  const { success } = await db.prepare(`
    INSERT INTO donations (donor_name, donor_email, donor_phone, amount, is_anonymous, dedication_message, payment_status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    data.donor_name, 
    data.donor_email, 
    data.donor_phone || null, 
    data.amount,
    data.is_anonymous ? 1 : 0,
    data.dedication_message || null,
    'pending'
  ).run();
  
  if (success) {
    return c.json({ success: true, message: 'הבקשה לתרומה נשלחה בהצלחה' });
  } else {
    return c.json({ success: false, message: 'שגיאה בשליחת הבקשה' }, 500);
  }
});

// Get donation statistics
app.get('/api/donations/stats', async (c) => {
  const db = c.env.DB;
  const { results } = await db.prepare(`
    SELECT 
      COUNT(*) as total_donations,
      COALESCE(SUM(amount), 0) as total_amount
    FROM donations 
    WHERE payment_status = 'completed'
  `).all();
  
  return c.json(results[0] || { total_donations: 0, total_amount: 0 });
});

export default app;
