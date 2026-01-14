
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function TokenDebugContent() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="p-10">Loading...</div>;
    }

    if (status === "unauthenticated") {
        return (
            <div className="p-10 flex flex-col gap-4 items-start">
                <h1 className="text-2xl font-bold">Salla Token Generator</h1>
                <p>Please sign in with your Salla Merchant account to generate a new Access Token.</p>
                <button
                    onClick={() => signIn("salla")}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Sign in with Salla
                </button>
            </div>
        );
    }

    return (
        <div className="p-10 flex flex-col gap-6 max-w-4xl">
            <h1 className="text-2xl font-bold text-green-600">Successfully Authenticated!</h1>

            <div className="bg-gray-100 p-4 rounded border border-gray-300 overflow-hidden">
                <h3 className="font-bold mb-2">SALLA_ACCESS_TOKEN</h3>
                <p className="text-sm text-gray-500 mb-2">Copy this line into your .env.local file:</p>
                <code className="block bg-black text-green-400 p-4 rounded break-all select-all">
                    SALLA_ACCESS_TOKEN={(session as any).accessToken}
                </code>
            </div>

            <div className="bg-gray-100 p-4 rounded border border-gray-300 overflow-hidden">
                <h3 className="font-bold mb-2">Refresh Token (Keep safe)</h3>
                <code className="block bg-black text-gray-400 p-4 rounded break-all select-all">
                    {(session as any).refreshToken}
                </code>
            </div>

            <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-fit"
            >
                Sign out
            </button>
        </div>
    );
}
