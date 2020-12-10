import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
        <div className={styles.header}>
          <h1>San Remo Italian Restaurant</h1>
          <ul className={styles.headerul}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="../menu">
                <a>Menu</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
  )
}