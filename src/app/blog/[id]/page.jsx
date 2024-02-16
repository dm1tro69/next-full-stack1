import styles from './page.module.css';
import Image from 'next/image';

async function getPost(id) {
    const post = await fetch(`http://localhost:3000/api/posts/${id}`);
    return post.json();
}
export default async function BlogId({ params }) {
    const post = await getPost(params.id);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.desc}>{post.desc}</p>
                    <div className={styles.author}>
                        <Image
                            src={post.img}
                            alt=''
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{post.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={post.img}
                        alt=''
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{post.content}</p>
            </div>
        </div>
    );
}
