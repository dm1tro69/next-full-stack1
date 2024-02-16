import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        next: {
            revalidate: 10,
        },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Blog() {
    const posts = await getData();
    return (
        <div className={styles.mainContainer}>
            {posts.map((post) => (
                <Link
                    href={'/blog/' + post._id}
                    className={styles.container}
                    key={post._id}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={post.img}
                            alt={'image'}
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <p className={styles.desc}>{post.content}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
