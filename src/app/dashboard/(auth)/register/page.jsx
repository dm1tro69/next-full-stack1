'use client';
import Link from 'next/link';
import styles from './register.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [firerrorst, setError] = useState(null);
    const router = useRouter();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const username = e.target[0].value;
    //     const email = e.target[1].value;
    //     const password = e.target[2].value;

    //     try {
    //         const res = await fetch('api/auth/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 password,
    //             }),
    //         });
    //         res.status === 201 &&
    //             router.push(
    //                 '/dashboard/login?success=Account has been created'
    //             );
    //     } catch (error) {
    //         setError(error);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 &&
                router.push(
                    '/dashboard/login?success=Account has been created'
                );
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create an Account</h1>
            <h2 className={styles.subtitle}>Please sign up to see dashboard</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    placeholder='Username'
                    type='text'
                    required
                />
                <input
                    className={styles.input}
                    placeholder='Email'
                    type='email'
                    required
                />{' '}
                <input
                    className={styles.input}
                    placeholder='Password'
                    type='password'
                    required
                />
                <button className={styles.button}>Register</button>
            </form>
            <span>- OR -</span>
            <Link className={styles.link} href={'/dashboard/login'}>
                Login
            </Link>
        </div>
    );
}
