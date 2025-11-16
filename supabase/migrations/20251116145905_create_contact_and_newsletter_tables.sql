/*
  # Contact Forms and Newsletter Database Setup

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamptz, defaults to now())
    - `newsletter_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `source` (text, optional - tracks where signup originated)
      - `created_at` (timestamptz, defaults to now())

  2. Security
    - Enable RLS on both tables
    - Allow public inserts for form submissions
    - Restrict selects/updates/deletes to authenticated users only
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can sign up for newsletter"
  ON newsletter_signups FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view newsletter signups"
  ON newsletter_signups FOR SELECT
  TO authenticated
  USING (true);
