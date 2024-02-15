import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
    return (
        <div className={styles.container}>
            <Link href={'/blog/1'} className={styles.container} key={'1'}>
                <div className={styles.container}>
                    <Image
                        src={'/apps.jpg'}
                        alt={'image'}
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Description</p>
                </div>
            </Link>
            <Link href={'/blog/2'} className={styles.container} key={'1'}>
                <div className={styles.container}>
                    <Image
                        src={'/apps.jpg'}
                        alt={'image'}
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Description</p>
                </div>
            </Link>
        </div>
    );
}
