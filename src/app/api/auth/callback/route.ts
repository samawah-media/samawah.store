import { NextResponse } from 'next/server';
import { saveToken } from '@/lib/token-storage';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
        return NextResponse.json({ error: `Salla Auth Error: ${error}` }, { status: 400 });
    }

    if (!code) {
        return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
    }

    const clientId = process.env.SALLA_CLIENT_ID;
    const clientSecret = process.env.SALLA_CLIENT_SECRET;
    const callbackUrl = process.env.SALLA_CALLBACK_URL;

    if (!clientId || !clientSecret || !callbackUrl) {
        return NextResponse.json(
            { error: 'Missing Salla credentials in environment variables' },
            { status: 500 }
        );
    }

    try {
        const response = await fetch('https://accounts.salla.sa/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: callbackUrl,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Salla Token Error:', data);
            return NextResponse.json({ error: data.error_description || 'Failed to exchange token' }, { status: 400 });
        }

        // Save tokens locally
        saveToken(data);

        // Redirect to home page with success query
        return NextResponse.redirect(new URL('/?auth=success', request.url));

    } catch (err) {
        console.error('Token Exchange Exception:', err);
        return NextResponse.json({ error: 'Internal Server Error during token exchange' }, { status: 500 });
    }
}
