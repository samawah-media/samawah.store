
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

import { SessionProvider } from "next-auth/react";
import TokenDebugContent from "./content";

export default function TokenDebugPage() {
    return (
        <SessionProvider>
            <TokenDebugContent />
        </SessionProvider>
    );
}
