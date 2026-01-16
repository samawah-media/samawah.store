import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...data } = body;

        // Validate environment variables
        const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
        const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
        const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
            console.error('❌ Missing Google Sheets environment variables');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        // Authenticate with Google
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Prepare row data
        // Order: [Date, Type, Name, Email, Phone, Social_Link, Followers_Count, Bio, Portfolio_Links, File_Url]
        const rowData = [
            new Date().toLocaleString('ar-SA'), // Date
            type === 'writer' ? 'برنامج الاستكتاب' : 'سفير هدنة', // Type
            data.fullName || data.name || '', // Name
            data.email || '', // Email
            data.mobile || '', // Phone
            data.socialLink || '', // Social_Link
            data.followers || '', // Followers_Count
            data.bio || '', // Bio
            data.links || '', // Portfolio_Links
            '' // File_Url (Place holder for now)
        ];

        // Append to Google Sheets
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'data!A:J', // Using the 'data' sheet name
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [rowData],
            },
        });

        return NextResponse.json({ success: true, message: 'Data added successfully' });

    } catch (error: any) {
        console.error('❌ Google Sheets Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to submit form' },
            { status: 500 }
        );
    }
}
