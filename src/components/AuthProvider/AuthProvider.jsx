'use client';
import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}
// export default function AuthProvider({ Component, pageProps, session }) {
//     return (
//         <SessionProvider session={session}>
//             <Component {...pageProps} />
//         </SessionProvider>
//     );
// }
