import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'
import Image from 'next/image'

export default function Menu() {
  return (
    <div className={styles.homediv}>
      <Head>
        <title>San Remo</title>
        <meta property="og:title" content="San Remo" key="title" />
      </Head>
      
      <div className={styles.homecontent}>
        <Header />

        <div className={styles.menucontentdiv}>
          <div>
            <h1>Our Menu</h1>
            <h2>Italian Cusine</h2>
            <ul>
                <li>Starters</li>
                <li>Mains</li>
                <li>Deserts</li>
            </ul>
          </div>
          <div>
            <h1>------ Mains ------</h1>
            <div className={styles.menucontainer}>
                <div className={styles.menuitem}>
                    <Image src='/images/calzone.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Calzone - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/pizza.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Pizza - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/calzone.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Calzone - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/pizza.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Pizza - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/calzone.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Calzone - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/pizza.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Pizza - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/calzone.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Calzone - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
                <div className={styles.menuitem}>
                    <Image src='/images/pizza.jpg' width={250} height={250}></Image>
                    <div className={styles.itemdescdiv}>
                        <h2>Pizza - £10.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris dignissim semper ex, sit amet blandit lorem aliquet vel. 
                            Maecenas dapibus facilisis ex, ut euismod erat mattis ut. 
                            Curabitur nec malesuada massa, sed semper ex.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
