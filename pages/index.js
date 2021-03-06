import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://ramadevsign.com">The Unicorn Startup</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://ramadevsign.com" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>a long text to describe something about the company</p>
          </a>

          <a href="https://ramadevsign.com" className={styles.card}>
            <h2>Meet the team &rarr;</h2>
            <p>a long text to describe something about the team we have here</p>
          </a>

          <a
            href="https://ramadevsign.com"
            className={styles.card}
          >
            <h2>Careers &rarr;</h2>
            <p>a long text to describe something about the Careers in the company</p>
          </a>

          <a
            href="https://ramadevsign.com"
            className={styles.card}
          >
            <h2>Contact us &rarr;</h2>
            <p>
            a long text to describe something about the how to contact us
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ramadevsign.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
