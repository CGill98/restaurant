import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './components/Header'
import Carousel from './components/Carousel'

const Gallery = () => {
    return (
        <div className={styles.homediv}>
        <Head>
          <title>San Remo</title>
          <meta property="og:title" content="San Remo" key="title" />
        </Head>
        
        <div className={styles.homecontent}>
          <Header />
  
          <div className={styles.gallerycontentdiv}>
            
              <h1>Gallery</h1>
              <Carousel />
        
          </div>
        </div>
      </div>
    )
}

export default Gallery
