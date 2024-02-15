import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div>2024 My App All rights reserved</div>
            <div className={styles.social}>
                <Image
                    className='icon'
                    alt='vk'
                    src='/vk.png'
                    width={15}
                    height={15}
                />
                <Image
                    className='icon'
                    alt='inst'
                    src='/inst.png'
                    width={15}
                    height={15}
                />
                <Image
                    className='icon'
                    alt='tw'
                    src='/twitter.png'
                    width={15}
                    height={15}
                />
                <Image
                    className='icon'
                    alt='yt'
                    src='/yt.png'
                    width={15}
                    height={15}
                />
            </div>
        </footer>
    );
}
