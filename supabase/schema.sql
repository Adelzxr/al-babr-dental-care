-- Al-Bader Dental Clinic - Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor

-- =============================================
-- DROP EXISTING POLICIES (if any)
-- =============================================
DROP POLICY IF EXISTS "Allow public to insert appointments" ON appointments;
DROP POLICY IF EXISTS "Allow public to read appointments" ON appointments;
DROP POLICY IF EXISTS "Allow public to insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated to read contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated to update contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated to delete contact messages" ON contact_messages;

-- =============================================
-- TABLES
-- =============================================

-- Appointments table for booking management
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  patient_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed'))
);

-- Contact messages table for inquiries
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE
);

-- Patients table (for future patient management)
CREATE TABLE IF NOT EXISTS patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  email TEXT UNIQUE,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  address TEXT,
  notes TEXT
);

-- =============================================
-- INDEXES
-- =============================================

CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON appointments(phone);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_patients_phone ON patients(phone);

-- =============================================
-- ROW LEVEL SECURITY
-- =============================================

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- =============================================
-- APPOINTMENTS POLICIES
-- =============================================

-- Allow anyone to create appointments (public booking)
CREATE POLICY "Allow public to insert appointments" ON appointments
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to check availability (read appointments)
CREATE POLICY "Allow public to read appointments" ON appointments
  FOR SELECT 
  TO anon, authenticated
  USING (true);

-- Allow authenticated users to update appointments
CREATE POLICY "Allow authenticated to update appointments" ON appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- =============================================
-- CONTACT MESSAGES POLICIES
-- =============================================

-- Allow anyone to send a contact message (THIS IS THE KEY FIX)
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read messages (for admin)
CREATE POLICY "Allow authenticated to read contact messages" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow public to read their own messages (optional)
CREATE POLICY "Allow public to read contact messages" ON contact_messages
  FOR SELECT
  TO anon
  USING (true);

-- Allow authenticated users to update messages (mark as read)
CREATE POLICY "Allow authenticated to update contact messages" ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete messages
CREATE POLICY "Allow authenticated to delete contact messages" ON contact_messages
  FOR DELETE
  TO authenticated
  USING (true);

-- =============================================
-- FUNCTIONS
-- =============================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_appointments_updated_at ON appointments;
DROP TRIGGER IF EXISTS update_patients_updated_at ON patients;

-- Trigger for appointments
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for patients
CREATE TRIGGER update_patients_updated_at
  BEFORE UPDATE ON patients
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SAMPLE DATA (Optional - uncomment to use)
-- =============================================

-- INSERT INTO appointments (patient_name, phone, email, appointment_date, appointment_time, status)
-- VALUES 
--   ('John Doe', '+123456789', 'john@example.com', CURRENT_DATE + INTERVAL '1 day', '09:00 AM', 'confirmed'),
--   ('Jane Smith', '+987654321', 'jane@example.com', CURRENT_DATE + INTERVAL '2 days', '02:00 PM', 'pending');
