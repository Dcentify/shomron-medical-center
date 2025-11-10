
CREATE TABLE news_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  is_published BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE donations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  donor_phone TEXT,
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'ILS',
  is_anonymous BOOLEAN DEFAULT 0,
  dedication_message TEXT,
  payment_status TEXT DEFAULT 'pending',
  payment_reference TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_news_posts_published ON news_posts(is_published, created_at);
CREATE INDEX idx_contact_messages_read ON contact_messages(is_read, created_at);
CREATE INDEX idx_donations_status ON donations(payment_status, created_at);
