'use client';

import { signIn } from 'next-auth/react';
export default function Login() {
    return (
        <div>
            <button onClick={() => signIn('github')}>Login with github</button>
        </div>
    );
}
