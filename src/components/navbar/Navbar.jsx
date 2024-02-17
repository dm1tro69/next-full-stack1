'use client';

import Link from 'next/link';
import styles from './navbar.module.css';
import DarckModeToggle from '../DarckModeToggle/DarckModeToggle';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
];

export default function Navbar() {
    const session = useSession();
    return (
        <nav className={styles.container}>
            <Link className={styles.logo} href={'/'}>
                MyApp
            </Link>
            <div className={styles.links}>
                <DarckModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                {session.status == 'authenticated' && (
                    <button onClick={() => signOut()} className={styles.logout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}
