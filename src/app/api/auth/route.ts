import { NextResponse } from 'next/server';

export async function GET() {
    const clientId = process.env.SALLA_CLIENT_ID;
    const callbackUrl = process.env.SALLA_CALLBACK_URL;

    if (!clientId || !callbackUrl) {
        return NextResponse.json(
            { error: 'Missing SALLA_CLIENT_ID or SALLA_CALLBACK_URL' },
            { status: 500 }
        );
    }

    // Generate a random state for CSRF protection (required by Salla > 8 chars)
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const sallaAuthUrl = new URL('https://accounts.salla.sa/oauth2/auth');
    sallaAuthUrl.searchParams.append('client_id', clientId);
    // Ensure callbackUrl is clean and matches exactly what is in Dashbaord
    sallaAuthUrl.searchParams.append('redirect_uri', callbackUrl.trim());
    sallaAuthUrl.searchParams.append('response_type', 'code');
    sallaAuthUrl.searchParams.append('scope', 'offline_access products.read categories.read');
    sallaAuthUrl.searchParams.append('state', state);

    console.log('🔐 Redirecting to Salla Auth:', sallaAuthUrl.toString());

    return NextResponse.redirect(sallaAuthUrl.toString());
}
