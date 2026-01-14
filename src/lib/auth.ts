// ========================================
// Authentication Module
// ========================================

import { getStoredToken } from './token-storage';

// Access token from environment as fallback
const ENV_ACCESS_TOKEN = process.env.SALLA_ACCESS_TOKEN;
const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Get the access token for Salla API authentication
 * Priority:
 * 1. Local Storage (from OAuth flow)
 * 2. Environment Variable
 */
export const getAccessToken = async (): Promise<string | null> => {
    // 1. Try to get fresh token from local storage (OAuth flow)
    const stored = getStoredToken();
    if (stored && stored.access_token) {
        return stored.access_token;
    }

    // 2. Fallback to environment variable
    if (ENV_ACCESS_TOKEN) {
        return ENV_ACCESS_TOKEN;
    }

    // Log warning only if no token found at all
    if (isDevelopment) {
        console.warn('⚠️ No SALLA_ACCESS_TOKEN found in environment or storage');
    }

    return null;
};
