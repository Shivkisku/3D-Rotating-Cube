import Head from 'next/head';
import Spinner from '../components/Spinner';
import styles from '../styles/Home.module.css'; // Import your CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page with spinner loader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Spinner />
      </main>
    </div>
  );
}
