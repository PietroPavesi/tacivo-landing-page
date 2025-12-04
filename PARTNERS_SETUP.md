# Partners Feature Setup Guide

This guide explains how to set up the Founding Partners feature with Supabase integration.

## Prerequisites

- Existing Supabase project (you can use your tacivo-mvp project)
- Supabase credentials (URL, Anon Key, Service Role Key)

## Setup Steps

### 1. Configure Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Where to find these:**
- Go to your Supabase project dashboard
- Navigate to Settings → API
- Copy the Project URL, anon/public key, and service_role key

### 2. Run Database Migration

In your Supabase project:

1. Go to the SQL Editor
2. Copy the contents of `supabase/migrations/001_create_partners_table.sql`
3. Paste and run the SQL

This will create:
- `partners` table with all necessary columns
- Indexes for performance
- Row Level Security policies
- Auto-update trigger for `updated_at`

### 3. Verify Database Setup

After running the migration, verify the table was created:

```sql
SELECT * FROM partners;
```

You should see an empty table with these columns:
- `id` (UUID)
- `name` (TEXT)
- `email` (TEXT)
- `company` (TEXT)
- `message` (TEXT, nullable)
- `status` (TEXT, default: 'pending')
- `created_at` (TIMESTAMPTZ)
- `updated_at` (TIMESTAMPTZ)

### 4. Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/partners`

3. Fill out and submit the form

4. Check your Supabase table to confirm the data was saved

### 5. View Applications in Supabase

Go to your Supabase dashboard:
- Navigate to Table Editor → `partners`
- View all submitted applications
- Update the `status` field to track progress

## Features

### Database Schema

```sql
CREATE TABLE partners (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',  -- pending | contacted | approved | rejected
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Security (RLS Policies)

- **Public Insert**: Anyone can submit applications (anon users)
- **Authenticated Read**: Logged-in users can view all applications
- **Authenticated Update**: Logged-in users can update application status

### Status Workflow

Track applications through these stages:
1. **pending**: New application (default)
2. **contacted**: Team has reached out
3. **approved**: Partnership approved
4. **rejected**: Application declined

## Email Notifications (Optional)

### Option 1: Manual Email Client

Current implementation opens the user's email client with pre-filled content. The application is saved to the database first.

### Option 2: Supabase Edge Functions (Recommended)

Create a Supabase Edge Function to send automatic emails:

```typescript
// supabase/functions/notify-partner-application/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { name, email, company, message } = await req.json()

  // Send email using your preferred service
  // - Resend
  // - SendGrid
  // - AWS SES

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
})
```

Deploy the function:
```bash
supabase functions deploy notify-partner-application
```

Then call it from your API route after saving to the database.

### Option 3: Database Webhooks

Set up a webhook in Supabase:
1. Go to Database → Webhooks
2. Create webhook on `partners` table INSERT
3. Point to your email service endpoint

### Option 4: Email Service Integration

Add Resend (recommended):

```bash
npm install resend
```

Update your `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
```

Update the API route:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// After saving to database:
await resend.emails.send({
  from: 'partnerships@tacivo.com',
  to: 'hello@tacivo.com',
  subject: `New Partner Application - ${company}`,
  html: `<h2>New Application</h2>...`,
  replyTo: email,
});
```

## Admin Dashboard (Optional)

You can create an admin page to manage applications:

```typescript
// app/admin/partners/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function AdminPartners() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const { data } = await supabase
        .from('partners')
        .select('*')
        .order('created_at', { ascending: false });

      setApplications(data || []);
    }
    fetchApplications();
  }, []);

  // Render applications table with status updates...
}
```

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env.local` exists and contains all three Supabase variables
- Restart your dev server after adding environment variables

### "Failed to save application" error
- Check that the migration was run successfully
- Verify RLS policies are configured correctly
- Check Supabase project logs for errors

### Can't see data in Supabase
- Verify the table was created: Go to Table Editor
- Check that environment variables point to the correct project
- View logs in Supabase Dashboard → Logs

## Next Steps

1. **Set up automated emails** using one of the options above
2. **Create an admin dashboard** to manage applications
3. **Add email confirmations** to applicants
4. **Set up notifications** (Slack, Discord, etc.) for new applications
5. **Add analytics** to track conversion rates

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Review Supabase logs in your project dashboard
- Contact: hello@tacivo.com
