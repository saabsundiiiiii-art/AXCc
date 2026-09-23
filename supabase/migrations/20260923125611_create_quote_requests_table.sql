/*
# Create quote_requests table for B2B lead capture

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `form_type` (text: 'quote' or 'sample')
  - `full_name` (text, not null)
  - `company_name` (text)
  - `business_email` (text, not null)
  - `phone` (text)
  - `dataset_type` (text)
  - `dataset_size` (text)
  - `annotation_type` (text)
  - `output_format` (text)
  - `timeline` (text)
  - `requirements` (text)
  - `dataset_link` (text)
  - `sample_filename` (text)
  - `status` (text, default 'new')
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `quote_requests`.
- Allow anon + authenticated INSERT only (public lead form, no login required).
- No SELECT/UPDATE/DELETE for anon — only inserts, so visitors can submit but not read others' submissions.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL DEFAULT 'quote',
  full_name text NOT NULL,
  company_name text,
  business_email text NOT NULL,
  phone text,
  dataset_type text,
  dataset_size text,
  annotation_type text,
  output_format text,
  timeline text,
  requirements text,
  dataset_link text,
  sample_filename text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
  ON quote_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);