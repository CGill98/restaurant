import React, {useState} from 'react'
import carousel from '../../styles/Carousel.module.css'
import Image from 'next/image'


/*
*there are x images
*there is an active image and the rest are not active
*active image has a width of 600px and inactive 0px
*clicking right button prompts styles changes active image:
    xa gets a right moving animation as does xa-1m
    xa is set to 0px width when animation is over
    xa-1 gets set to 600px before the animations start 


*/

const mod = n => (((n - 1) % 2) + 2) % 2



const Carousel = () => {
    const [activeImg, setActiveImg] = useState(1) //from 0 to x-1
    const [carouselStyle, setCarouselStyle] = useState([carousel.item, carousel.activeitem]) 
    const [tempActive, setTempActive] = useState(-1) //only active during the moving animations 

    const imgWidth = (id) => activeImg === id  || tempActive === id ? '600' : '0'

    const handleAnimationEnd = () => {
        setTempActive(-1)
        let tempCarouselStyle = carouselStyle
        tempCarouselStyle[mod(activeImg + 1)] = carousel.item
        tempCarouselStyle[activeImg] = carousel.activeitem
        setCarouselStyle(tempCarouselStyle)
    }

    return (
        <div className={carousel.carousel}>
            <Image src='/icons/arrow-button.png' width='50' height='50' className={carousel.leftbutton} onClick={()=>console.log("left")}/>
            <div className={carousel.imgdiv}>
               
                <Image src='/images/calzone.jpg' width={imgWidth(0)} height='600' className={carouselStyle[0]}
                    onAnimationEnd={handleAnimationEnd}/>
                <Image src='/images/pizza.jpg'   width={imgWidth(1)} height='600' className={carouselStyle[1]}
                    onAnimationEnd={handleAnimationEnd}/>

    
            </div>
            <Image src='/icons/arrow-button.png' width='50' height='50' className={carousel.rightbutton}
                onClick={()=>{
                    setTempActive(activeImg)
                    console.log(mod(1))
                    setActiveImg(mod(activeImg - 1)) //mod that works with negatives
                    let tempCarouselStyle = carouselStyle
                    tempCarouselStyle[mod(activeImg - 1)] = carousel.movingright
                    tempCarouselStyle[activeImg] = carousel.movingright
                    setCarouselStyle(tempCarouselStyle)
                }}/>

        </div>
    )
}

export default Carousel
