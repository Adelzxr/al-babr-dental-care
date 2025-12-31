# Al-Babr Dental Clinic

A modern, professional dental clinic website built with React, TypeScript, and Supabase.

## Features

- 🏥 **Professional Design** - Clean, modern UI designed for healthcare
- 📅 **Online Booking** - Patients can book appointments online with real-time availability
- 📧 **Contact Form** - Direct communication channel for inquiries
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔐 **Supabase Backend** - Secure, scalable PostgreSQL database
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎨 **Customizable** - Easy to modify colors, content, and branding

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd al-babr-dental-care
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up Supabase**
   
   Create a new project on [Supabase](https://supabase.com) and run the SQL schema (see below).

4. **Configure environment variables**
   
   Copy the example environment file and add your Supabase credentials:
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Supabase project URL and anon key:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

   The app will be available at `http://localhost:8080`

## Supabase Database Setup

Run this SQL in your Supabase SQL Editor to create the required tables:

```sql
-- Create appointments table
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  patient_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed'))
);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE
);

-- Create patients table (optional - for future use)
CREATE TABLE patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  date_of_birth DATE,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (appointments booking)
CREATE POLICY "Allow public to insert appointments" ON appointments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read own appointments" ON appointments
  FOR SELECT USING (true);

-- Create policies for contact messages
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_contact_messages_read ON contact_messages(is_read);
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   └── ui/              # shadcn/ui components
├── hooks/
│   ├── use-appointments.ts  # Appointment-related hooks
│   ├── use-contact.ts       # Contact form hooks
│   └── use-toast.ts         # Toast notifications
├── lib/
│   ├── supabase.ts      # Supabase client configuration
│   └── utils.ts         # Utility functions
├── pages/               # Route pages
├── types/
│   └── database.ts      # TypeScript types for Supabase
└── data/                # Static data files
```

## Customization

### Colors

The color scheme is defined in `src/index.css` using CSS variables. The primary colors are:
- **Primary**: Sky blue (`hsl(199 89% 48%)`)
- **Secondary**: Green (`hsl(160 60% 45%)`)

### Content

Update the clinic information in these files:
- `src/components/layout/Footer.tsx` - Contact info, hours
- `src/components/layout/Header.tsx` - Phone number
- `src/components/sections/HeroSection.tsx` - Hero content
- `src/pages/Contact.tsx` - Contact details

### Images

Replace the hero image by updating `src/assets/hero-dental.jpg` with your own image.

## Building for Production

```bash
npm run build
# or
bun run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repository
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Connect your repository

## License

MIT License - feel free to use this project for your dental clinic or healthcare practice.

