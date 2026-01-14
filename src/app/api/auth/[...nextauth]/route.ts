import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        {
            id: "salla",
            name: "Salla",
            type: "oauth",
            authorization: "https://accounts.salla.sa/oauth2/auth",
            token: "https://accounts.salla.sa/oauth2/token",
            userinfo: "https://accounts.salla.sa/oauth2/user/info",
            clientId: process.env.SALLA_CLIENT_ID,
            clientSecret: process.env.SALLA_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.data.id,
                    name: profile.data.name,
                    email: profile.data.email,
                    image: profile.data.avatar,
                }
            },
        },
    ],
    secret: process.env.NEXTAUTH_SECRET || "development-secret",
    debug: process.env.NODE_ENV === 'development',
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.refreshToken = account.refresh_token
                token.expiresAt = account.expires_at
            }
            return token
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            // @ts-expect-error - accessToken is not in the default session type
            session.accessToken = token.accessToken
            // @ts-expect-error - refreshToken is not in the default session type
            session.refreshToken = token.refreshToken
            return session
        },
    },
})

export { handler as GET, handler as POST }
