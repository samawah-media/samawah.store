import fs from 'fs';
import path from 'path';

const TOKEN_FILE = path.join(process.cwd(), 'salla_tokens.json');

export interface SallaToken {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    created_at?: number;
}

export const saveToken = (token: SallaToken) => {
    const tokenData = {
        ...token,
        created_at: Date.now(),
    };
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokenData, null, 2));
    console.log('✅ Token saved to', TOKEN_FILE);
};

export const getStoredToken = (): SallaToken | null => {
    if (!fs.existsSync(TOKEN_FILE)) {
        return null;
    }
    try {
        const data = fs.readFileSync(TOKEN_FILE, 'utf-8');
        return JSON.parse(data) as SallaToken;
    } catch (error) {
        console.error('Failed to parse token file:', error);
        return null;
    }
};
