import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <div className={styles.homediv}>
      <Head>
        <title>San Remo</title>
        <meta property="og:title" content="San Remo" key="title" />
      </Head>
      
      <div className={styles.homecontent}>
        <Header />

        <div className={styles.homecontentdiv}>
          <div>
            <h1>Welcome To San Remo</h1>
            <h2>Italian Restaurant</h2>
            <div className={styles.homebtndiv}>
              <button>Book Your Next Meal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
