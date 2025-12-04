import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to Supabase database
    const { data, error: dbError } = await supabaseAdmin
      .from('partners')
      .insert([
        {
          name,
          email,
          company,
          message: message || null,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save application' },
        { status: 500 }
      );
    }

    console.log('Partner application saved:', {
      id: data.id,
      name,
      email,
      company,
      timestamp: new Date().toISOString(),
    });

    // Trigger Supabase Edge Function to send email notification
    try {
      const edgeFunctionUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-partner-notification`;
      const emailResponse = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          application: data,
        }),
      });

      if (emailResponse.ok) {
        const emailResult = await emailResponse.json();
        console.log('Email notification sent:', emailResult);
      } else {
        const errorText = await emailResponse.text();
        console.error('Failed to send email notification:', errorText);
        // Don't fail the request if email fails - application is already saved
      }
    } catch (emailError) {
      console.error('Error calling edge function:', emailError);
      // Don't fail the request if email fails - application is already saved
    }

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: data.id,
    });
  } catch (error) {
    console.error('Partner application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
