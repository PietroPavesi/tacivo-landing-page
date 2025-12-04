# Edge Function Email Setup - Complete Guide

This guide walks you through setting up automatic email notifications for partner applications using Supabase Edge Functions.

## 🎯 What This Does

When someone submits a founding partner application:
1. ✅ Application saved to Supabase database
2. ✅ Email sent to your team at `hello@tacivo.com`
3. ✅ Confirmation email sent to the applicant
4. ✅ Beautiful HTML email templates
5. ✅ No manual email client opening needed

## 📋 Prerequisites

- Supabase project (you already have this!)
- Database migration run (partners table created)
- Email service account (Resend or SendGrid)

## 🚀 Quick Start (5 Steps)

### Step 1: Install Supabase CLI

```bash
npm install -g supabase
```

### Step 2: Login and Link Project

```bash
# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref
```

**Finding your project ref:**
Go to your Supabase dashboard URL:
`https://supabase.com/dashboard/project/[YOUR-PROJECT-REF]`

### Step 3: Choose Email Service

#### Option A: Resend (Recommended - Easier Setup)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from dashboard
3. Add your domain (tacivo.com) and verify it
4. Set the secret:
   ```bash
   supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

#### Option B: SendGrid (Alternative)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key with Mail Send permissions
3. Verify sender authentication
4. Set the secret:
   ```bash
   supabase secrets set SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

### Step 4: Deploy the Edge Function

```bash
# From your project root
supabase functions deploy send-partner-notification

# Or use the provided script
./supabase/functions/deploy.sh
```

### Step 5: Test It!

1. Start your dev server: `npm run dev`
2. Visit: `http://localhost:3000/partners`
3. Fill out and submit the form
4. Check your email!

## 📧 Email Templates

### Team Notification Email

Sent to: `hello@tacivo.com`

**Includes:**
- Applicant name, email, company
- Application message
- Application ID
- Direct reply button
- Professional formatting

### Applicant Confirmation Email

Sent to: Applicant's email

**Includes:**
- Thank you message
- Next steps timeline
- Team contact info
- Professional branding

## 🔧 Configuration

### Environment Variables

The edge function automatically has access to:
- `SUPABASE_URL` (auto-set)
- `SUPABASE_SERVICE_ROLE_KEY` (auto-set)

You need to set:
- `RESEND_API_KEY` (for Resend)
- OR `SENDGRID_API_KEY` (for SendGrid)

### Setting Secrets

```bash
# List current secrets
supabase secrets list

# Set a secret
supabase secrets set KEY=value

# Set multiple secrets at once
supabase secrets set \
  RESEND_API_KEY=re_xxx \
  OTHER_KEY=value
```

### Updating Environment Variables in Next.js

Your `.env.local` should have:

```env
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email service is set in Supabase secrets, not here
```

## 🐛 Troubleshooting

### Function deployed but emails not sending

**Check the logs:**
```bash
supabase functions logs send-partner-notification --follow
```

**Common issues:**
1. Email API key not set: `supabase secrets set RESEND_API_KEY=...`
2. Domain not verified (for Resend)
3. Sender not authenticated (for SendGrid)
4. API key has wrong permissions

### "Failed to send email notification" in console

This is **OK** - the application still saves to the database. The email failure is logged but doesn't block the submission.

**To fix:**
1. Check edge function logs
2. Verify email API key is correct
3. Test email service directly

### Emails going to spam

**Solutions:**
1. Verify your domain (Resend/SendGrid)
2. Set up SPF and DKIM records
3. Start with low volume to build reputation
4. Use your actual domain (partnerships@tacivo.com)

### "Unauthorized" when calling function

**Check:**
1. `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` is correct
2. Project ref in Supabase CLI link is correct
3. Function is deployed to the right project

## 📊 Monitoring

### View Logs

```bash
# Live logs (updates in real-time)
supabase functions logs send-partner-notification --follow

# Last 100 invocations
supabase functions logs send-partner-notification --limit 100
```

### In Supabase Dashboard

1. Go to **Edge Functions** in your project
2. Click **send-partner-notification**
3. View **Logs** tab for execution history
4. Check **Metrics** for usage stats

### In Email Service Dashboard

**Resend:**
- View all sent emails
- Check delivery status
- See open rates (if enabled)

**SendGrid:**
- Activity Feed shows all emails
- Statistics dashboard
- Bounce/spam reports

## 💰 Cost Breakdown

### Resend
- **Free tier:** 3,000 emails/month
- **Pro:** $20/month for 50,000 emails
- ✅ Best for: Most startups

### SendGrid
- **Free tier:** 100 emails/day (3,000/month)
- **Essentials:** $19.95/month for 50,000 emails
- ✅ Best for: High volume

### Supabase Edge Functions
- **Free tier:** 500,000 invocations/month
- **Pro:** $25/month for 2M invocations
- ✅ Essentially free for this use case

**Expected costs for partner applications:**
- 100 applications/month = Free on all platforms
- 1,000 applications/month = Free or ~$20/month

## 🔄 Updating the Function

### Make changes to the code

Edit: `supabase/functions/send-partner-notification/index.ts`

### Redeploy

```bash
supabase functions deploy send-partner-notification

# Or use the script
./supabase/functions/deploy.sh
```

### Test changes

Submit a new application or use curl:

```bash
curl -i --location --request POST \
  'https://your-project-ref.supabase.co/functions/v1/send-partner-notification' \
  --header 'Authorization: Bearer YOUR_SERVICE_ROLE_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "application": {
      "id": "test-123",
      "name": "Test User",
      "email": "test@example.com",
      "company": "Test Co",
      "message": "Testing",
      "created_at": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
    }
  }'
```

## 🎨 Customizing Email Templates

### Edit the HTML templates

In `supabase/functions/send-partner-notification/index.ts`:

1. Find `generateEmailHTML()` - team notification template
2. Find `generateConfirmationEmailHTML()` - applicant confirmation
3. Modify HTML/CSS as needed
4. Redeploy function

### Tips for customization:
- Use inline CSS for email compatibility
- Test with multiple email clients
- Keep it simple for better deliverability
- Use web-safe fonts

## 🧪 Testing

### Test locally

```bash
# Start local Supabase
supabase start

# In another terminal
supabase functions serve send-partner-notification

# Test with curl
curl http://localhost:54321/functions/v1/send-partner-notification \
  -H "Authorization: Bearer eyJh..." \
  -H "Content-Type: application/json" \
  -d '{"application": {...}}'
```

### Test in production

1. Submit real application via website
2. Check Supabase logs
3. Verify emails received
4. Check email service dashboard

## 📚 Additional Resources

- [Supabase Edge Functions Docs](https://supabase.com/docs/guides/functions)
- [Resend Documentation](https://resend.com/docs)
- [SendGrid Documentation](https://docs.sendgrid.com)
- [Deno Runtime Docs](https://deno.land/manual)

## 🆘 Support

If you run into issues:

1. **Check logs first:**
   ```bash
   supabase functions logs send-partner-notification --follow
   ```

2. **Verify secrets:**
   ```bash
   supabase secrets list
   ```

3. **Test email service directly:**
   Use their dashboard or API directly to confirm API key works

4. **Review function code:**
   Check `supabase/functions/send-partner-notification/index.ts`

5. **Contact support:**
   - Supabase: support@supabase.io
   - Resend: support@resend.com
   - SendGrid: Check their support portal

## ✅ Checklist

Before going live:

- [ ] Database migration run (partners table exists)
- [ ] Supabase CLI installed and authenticated
- [ ] Edge function deployed successfully
- [ ] Email service API key set in secrets
- [ ] Domain verified (for Resend) or sender authenticated (for SendGrid)
- [ ] Test application submitted and emails received
- [ ] Logs checked for errors
- [ ] Email templates reviewed and approved
- [ ] `.env.local` configured with Supabase credentials
- [ ] Monitoring set up (log alerts, email service dashboard)

## 🎉 You're Done!

Your partner applications will now automatically:
1. Save to Supabase database
2. Send notification to your team
3. Send confirmation to applicant
4. All without manual intervention!

Questions? Check the logs or contact hello@tacivo.com
