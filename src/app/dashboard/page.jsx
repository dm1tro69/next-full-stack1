'use client';
import useSWR from 'swr';
import styles from './dashboard.module.css';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const session = useSession();
    const router = useRouter();
    console.log(session);
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `api/posts?username=${session?.data.user.name}`,
        fetcher
    );
    if (session.status === 'unauthenticated') {
        router.push('/dashboard/login');
    }
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    // const [data, setdata] = useState([]);
    // const [error, seterror] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     async function getData() {
    //         setIsLoading(true);
    //         const res = await fetch(
    //             'https://jsonplaceholder.typicode.com/posts'
    //         );
    //         if (!res.ok) {
    //             seterror(true);
    //             setIsLoading(false);
    //             return;
    //         }
    //         const data = await res.json();
    //         setdata(data);
    //         setIsLoading(false);
    //     }
    //     getData();
    // }, []);

    if (session.status == 'authenticated') {
        return (
            <div>
                <h1>Dashboard</h1>
                <form className={styles.new}>
                    <h1>Add New Post</h1>
                    <input
                        type='text'
                        placeholder='Title'
                        className={styles.input}
                    />
                    <input
                        type='text'
                        placeholder='Desc'
                        className={styles.input}
                    />
                    <input
                        type='text'
                        placeholder='Image'
                        className={styles.input}
                    />
                    <textarea cols='30' rows='10' className={styles.textArea} />
                    <button className={styles.button}> Send</button>
                </form>
            </div>
        );
    }
}
