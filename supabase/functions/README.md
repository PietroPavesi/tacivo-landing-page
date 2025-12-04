# Supabase Edge Functions - Deployment Guide

## Overview

This directory contains Supabase Edge Functions for automated email notifications.

## Functions

### `send-partner-notification`

Sends email notifications when a new founding partner application is submitted.

**Features:**
- Sends notification to team at `hello@tacivo.com`
- Sends confirmation email to applicant
- Supports Resend (recommended) or SendGrid
- Beautiful HTML email templates
- Error handling and logging

## Prerequisites

1. **Install Supabase CLI**
   ```bash
   npm install -g supabase
   ```

2. **Login to Supabase**
   ```bash
   supabase login
   ```

3. **Link to your project**
   ```bash
   supabase link --project-ref your-project-ref
   ```

   Find your project ref in the Supabase dashboard URL:
   `https://supabase.com/dashboard/project/[your-project-ref]`

## Email Service Setup

### Option 1: Resend (Recommended)

1. **Sign up at [resend.com](https://resend.com)**

2. **Get your API key:**
   - Go to API Keys in dashboard
   - Create new API key
   - Copy the key

3. **Verify your domain:**
   - Go to Domains
   - Add `tacivo.com`
   - Follow DNS setup instructions
   - Verify domain

4. **Set the secret in Supabase:**
   ```bash
   supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

### Option 2: SendGrid (Alternative)

1. **Sign up at [sendgrid.com](https://sendgrid.com)**

2. **Get your API key:**
   - Go to Settings → API Keys
   - Create API Key with Mail Send permissions
   - Copy the key

3. **Verify your sender:**
   - Go to Settings → Sender Authentication
   - Verify your email or domain

4. **Set the secret in Supabase:**
   ```bash
   supabase secrets set SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

## Deployment

### Deploy the function

From your project root:

```bash
# Deploy the function
supabase functions deploy send-partner-notification

# Or deploy all functions
supabase functions deploy
```

### Set required secrets

The edge function needs these environment variables:

```bash
# Required (automatically available)
# - SUPABASE_URL (auto-set by Supabase)
# - SUPABASE_SERVICE_ROLE_KEY (auto-set by Supabase)

# Required: Email service API key (choose one)
supabase secrets set RESEND_API_KEY=your_resend_api_key
# OR
supabase secrets set SENDGRID_API_KEY=your_sendgrid_api_key
```

### Verify deployment

```bash
# List deployed functions
supabase functions list

# View function logs
supabase functions logs send-partner-notification

# Test the function (requires authentication)
curl -i --location --request POST \
  'https://your-project-ref.supabase.co/functions/v1/send-partner-notification' \
  --header 'Authorization: Bearer YOUR_SUPABASE_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "application": {
      "id": "test-id",
      "name": "Test User",
      "email": "test@example.com",
      "company": "Test Company",
      "message": "This is a test",
      "created_at": "2024-01-01T00:00:00Z"
    }
  }'
```

## Local Development

### Run function locally

```bash
# Start Supabase locally
supabase start

# Serve functions locally
supabase functions serve send-partner-notification

# In another terminal, test it
curl -i --location --request POST \
  'http://localhost:54321/functions/v1/send-partner-notification' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' \
  --header 'Content-Type: application/json' \
  --data '{
    "application": {
      "id": "test-id",
      "name": "Test User",
      "email": "test@example.com",
      "company": "Test Company",
      "message": "This is a test",
      "created_at": "2024-01-01T00:00:00Z"
    }
  }'
```

### Set local secrets

Create `.env` file in `supabase/functions/.env`:

```env
RESEND_API_KEY=your_local_resend_key
# OR
SENDGRID_API_KEY=your_local_sendgrid_key
```

## Monitoring

### View logs

```bash
# Live logs
supabase functions logs send-partner-notification --follow

# Recent logs
supabase functions logs send-partner-notification --limit 100
```

### In Supabase Dashboard

1. Go to Edge Functions in your project
2. Click on `send-partner-notification`
3. View Logs tab for execution history
4. Check Invocations tab for usage stats

## Troubleshooting

### "Missing email service API key"

**Problem:** Function executes but doesn't send emails.

**Solution:**
```bash
# Verify secrets are set
supabase secrets list

# Set the required secret
supabase secrets set RESEND_API_KEY=your_key
```

### "Unauthorized" error

**Problem:** Function returns 401 or 403.

**Solution:** Check that your `SUPABASE_SERVICE_ROLE_KEY` is set in your Next.js `.env.local` and that it matches your project.

### Email not received

**Problem:** Function succeeds but email doesn't arrive.

**Checklist:**
1. Check spam folder
2. Verify email service API key is correct
3. Check email service dashboard for delivery status
4. Verify sender domain is authenticated (for Resend/SendGrid)
5. Check function logs for errors

### "Domain not verified"

**Problem:** Email service rejects sending.

**Solution:**
- For Resend: Verify your domain in dashboard
- For SendGrid: Complete sender authentication
- Use sandbox mode for testing (may have limitations)

## Email Template Customization

The email templates are in the edge function code. To customize:

1. Edit `generateEmailHTML()` for team notifications
2. Edit `generateConfirmationEmailHTML()` for applicant confirmations
3. Redeploy the function

## Cost Considerations

### Resend Pricing
- Free: 3,000 emails/month
- Pro: $20/month for 50,000 emails
- Best for: Startups and growing businesses

### SendGrid Pricing
- Free: 100 emails/day
- Essentials: $19.95/month for 50,000 emails
- Best for: Enterprises with high volume

### Supabase Edge Functions
- Free tier: 500,000 invocations/month
- Pro: $25/month for 2M invocations
- Edge functions are very cost-effective

## Next Steps

1. **Set up monitoring alerts** in your email service
2. **Configure custom templates** in email service dashboard
3. **Add analytics tracking** to emails
4. **Set up email forwarding** rules in your email client
5. **Create email response templates** for common replies

## Support

- Supabase Docs: https://supabase.com/docs/guides/functions
- Resend Docs: https://resend.com/docs
- SendGrid Docs: https://docs.sendgrid.com

For issues specific to this implementation:
- Check function logs first
- Review the code in `index.ts`
- Contact: hello@tacivo.com
