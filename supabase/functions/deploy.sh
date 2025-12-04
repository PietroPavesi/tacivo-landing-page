#!/bin/bash

# Deployment script for Supabase Edge Functions
# Usage: ./supabase/functions/deploy.sh

set -e

echo "🚀 Deploying Supabase Edge Functions..."
echo ""

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Please install it first:"
    echo "   npm install -g supabase"
    exit 1
fi

# Check if logged in
if ! supabase projects list &> /dev/null; then
    echo "❌ Not logged in to Supabase. Please run:"
    echo "   supabase login"
    exit 1
fi

echo "✅ Supabase CLI found and authenticated"
echo ""

# Deploy the function
echo "📦 Deploying send-partner-notification function..."
supabase functions deploy send-partner-notification --no-verify-jwt

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Set your email service API key:"
echo "   supabase secrets set RESEND_API_KEY=your_key"
echo "   # OR"
echo "   supabase secrets set SENDGRID_API_KEY=your_key"
echo ""
echo "2. Test the function:"
echo "   Visit: http://localhost:3000/partners"
echo "   Submit a test application"
echo ""
echo "3. Monitor logs:"
echo "   supabase functions logs send-partner-notification --follow"
echo ""
echo "4. View in dashboard:"
echo "   Go to Edge Functions in your Supabase project"
echo ""
