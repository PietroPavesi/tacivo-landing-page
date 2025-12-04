// Supabase Edge Function to send partner application notification emails
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PartnerApplication {
  id: string
  name: string
  email: string
  company: string
  message: string | null
  created_at: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { application } = await req.json() as { application: PartnerApplication }

    if (!application) {
      throw new Error('Missing application data')
    }

    // Initialize Supabase client (for potential future use)
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Option 1: Using Resend (Recommended)
    const resendApiKey = Deno.env.get('RESEND_API_KEY')

    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Tacivo Partnerships <partnerships@tacivo.com>',
          to: ['hello@tacivo.com'],
          reply_to: application.email,
          subject: `New Founding Partner Application - ${application.company}`,
          html: generateEmailHTML(application),
        }),
      })

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text()
        throw new Error(`Resend API error: ${errorText}`)
      }

      const emailData = await emailResponse.json()
      console.log('Email sent via Resend:', emailData)

      // Optionally send confirmation email to applicant
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Tacivo Partnerships <partnerships@tacivo.com>',
          to: [application.email],
          subject: 'Thank you for your Founding Partner application',
          html: generateConfirmationEmailHTML(application),
        }),
      })

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Emails sent successfully',
          emailId: emailData.id
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    // Option 2: Using SendGrid (if Resend is not available)
    const sendgridApiKey = Deno.env.get('SENDGRID_API_KEY')

    if (sendgridApiKey) {
      const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sendgridApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: 'hello@tacivo.com' }],
            subject: `New Founding Partner Application - ${application.company}`,
          }],
          from: {
            email: 'partnerships@tacivo.com',
            name: 'Tacivo Partnerships'
          },
          reply_to: { email: application.email },
          content: [{
            type: 'text/html',
            value: generateEmailHTML(application),
          }],
        }),
      })

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text()
        throw new Error(`SendGrid API error: ${errorText}`)
      }

      console.log('Email sent via SendGrid')

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Email sent successfully via SendGrid',
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    // If no email service is configured, log and return success
    console.warn('No email service configured (RESEND_API_KEY or SENDGRID_API_KEY)')
    console.log('Application data:', application)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Application logged (no email service configured)',
        note: 'Configure RESEND_API_KEY or SENDGRID_API_KEY to send emails'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error in send-partner-notification:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})

function generateEmailHTML(application: PartnerApplication): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #CC785C 0%, #D4A27F 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e5e5;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #f0f0f0;
    }
    .field:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .value {
      font-size: 16px;
      color: #191919;
    }
    .message-box {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 6px;
      border-left: 4px solid #CC785C;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
      color: #999;
      font-size: 12px;
    }
    .button {
      display: inline-block;
      background: #CC785C;
      color: white;
      padding: 12px 30px;
      border-radius: 6px;
      text-decoration: none;
      margin-top: 20px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">🤝 New Founding Partner Application</h1>
  </div>

  <div class="content">
    <div class="field">
      <div class="label">Applicant Name</div>
      <div class="value">${application.name}</div>
    </div>

    <div class="field">
      <div class="label">Email Address</div>
      <div class="value">
        <a href="mailto:${application.email}" style="color: #CC785C; text-decoration: none;">
          ${application.email}
        </a>
      </div>
    </div>

    <div class="field">
      <div class="label">Company</div>
      <div class="value">${application.company}</div>
    </div>

    ${application.message ? `
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${application.message.replace(/\n/g, '<br>')}</div>
    </div>
    ` : ''}

    <div class="field">
      <div class="label">Application ID</div>
      <div class="value" style="font-family: monospace; font-size: 14px; color: #666;">
        ${application.id}
      </div>
    </div>

    <div class="field">
      <div class="label">Submitted At</div>
      <div class="value">
        ${new Date(application.created_at).toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'long'
        })}
      </div>
    </div>

    <a href="mailto:${application.email}?subject=Re: Founding Partner Application" class="button">
      Reply to ${application.name}
    </a>
  </div>

  <div class="footer">
    <p>This application was submitted through the Tacivo founding partners form.</p>
    <p>View in Supabase dashboard to manage the application status.</p>
  </div>
</body>
</html>
  `.trim()
}

function generateConfirmationEmailHTML(application: PartnerApplication): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #CC785C 0%, #D4A27F 100%);
      color: white;
      padding: 40px 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background: #ffffff;
      padding: 40px 30px;
      border: 1px solid #e5e5e5;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .highlight {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 6px;
      border-left: 4px solid #CC785C;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
      color: #999;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0 0 10px 0; font-size: 28px;">Thank You, ${application.name}! 🎉</h1>
    <p style="margin: 0; opacity: 0.9; font-size: 16px;">Your founding partner application has been received</p>
  </div>

  <div class="content">
    <p>Dear ${application.name},</p>

    <p>
      Thank you for your interest in becoming a founding partner with Tacivo.
      We're excited about the opportunity to work together and transform how organizations
      capture and leverage tacit knowledge.
    </p>

    <div class="highlight">
      <h3 style="margin-top: 0; color: #CC785C;">What happens next?</h3>
      <ol style="margin: 10px 0 0 0; padding-left: 20px;">
        <li>Our team will review your application within 48 hours</li>
        <li>We'll reach out to schedule a call to discuss the partnership opportunity</li>
        <li>We'll explore how Tacivo can best serve your organization's needs</li>
      </ol>
    </div>

    <p>
      In the meantime, if you have any questions or would like to share additional
      information about ${application.company}, please don't hesitate to reply to this email.
    </p>

    <p>
      We look forward to connecting with you soon!
    </p>

    <p style="margin-top: 30px;">
      <strong>Best regards,</strong><br>
      The Tacivo Team<br>
      <a href="mailto:hello@tacivo.com" style="color: #CC785C; text-decoration: none;">hello@tacivo.com</a>
    </p>
  </div>

  <div class="footer">
    <p>© ${new Date().getFullYear()} Tacivo. All rights reserved.</p>
    <p>AI-Powered Knowledge Capture Platform</p>
  </div>
</body>
</html>
  `.trim()
}
