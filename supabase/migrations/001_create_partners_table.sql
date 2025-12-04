-- Create partners table for storing founding partner applications
CREATE TABLE IF NOT EXISTS public.partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'approved', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_partners_email ON public.partners(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_partners_status ON public.partners(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_partners_created_at ON public.partners(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public form submissions)
CREATE POLICY "Allow public insert" ON public.partners
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all records (for admin dashboard)
CREATE POLICY "Allow authenticated read" ON public.partners
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update records (for admin management)
CREATE POLICY "Allow authenticated update" ON public.partners
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_partners_updated_at
  BEFORE UPDATE ON public.partners
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comment for documentation
COMMENT ON TABLE public.partners IS 'Stores founding partner applications from the website';
COMMENT ON COLUMN public.partners.status IS 'Application status: pending, contacted, approved, or rejected';
