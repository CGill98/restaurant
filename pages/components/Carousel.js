import React from 'react'
import carousel from '../../styles/Carousel.module.css'
import Image from 'next/image'

const Carousel = () => {
    return (
        <div className={carousel.carousel}>
            <Image src='/icons/arrow-button.png' width='50' height='50' className={carousel.leftbutton} onClick={()=>console.log("left")}/>
            <div className={carousel.imgdiv}>
                <Image src='/images/pizza.jpg' width='600' height='600' className={carousel.item}/>
               {/*}
                <Image src='/images/calzone.jpg' width='600' height='600' className={carousel.item}/>
    */}
            </div>
            <Image src='/icons/arrow-button.png' width='50' height='50' className={carousel.rightbutton}/>

        </div>
    )
}

export default Carousel
