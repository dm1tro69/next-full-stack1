import styles from './dashboard.module.css';

export default function Dashboard() {
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
