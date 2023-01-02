import React from 'react'
import { useEffect } from 'react'
import './Slider.css'
import leftArrow from '../../Assets/Icons/chevron-left.svg'
import rightArrow from '../../Assets/Icons/chevron-right.svg'
import * as ReactDOM from 'react-dom/client';



import img1 from '../../Assets/Sliderimages/img1.jpg'
import img2 from '../../Assets/Sliderimages/img2.jpg'
import img3 from '../../Assets/Sliderimages/img3.jpg'
import img4 from '../../Assets/Sliderimages/img4.jpg'
import img5 from '../../Assets/Sliderimages/img5.jpg'
import img6 from '../../Assets/Sliderimages/img6.jpg'
import img7 from '../../Assets/Sliderimages/img7.jpg'
import img8 from '../../Assets/Sliderimages/img8.jpg'
import img9 from '../../Assets/Sliderimages/img9.jpg'
import { useState } from 'react'


export default function Slider() {


    const [counter, setCounter] = useState(1)
    const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

    useEffect(() => {


        const root0 = ReactDOM.createRoot(document.getElementById('0'))
        const root1 = ReactDOM.createRoot(document.getElementById('1'))
        const root2 = ReactDOM.createRoot(document.getElementById('2'))

        root0.render(<>
            <img className='img' src={imgArr[counter - 1]} alt="" />
        </>)

        root1.render(<>
            <img className='img' src={imgArr[counter]} alt="" />
        </>)

        root2.render(<>
            <img className='img' src={imgArr[counter + 1]} alt="" />
        </>)


    }, [counter])


    const position0 = {


    }

    const position2 = {
        "display": 'block',
        "width": '20vw',
        "height": '20vw',
        "borderRadius": '40px 4px 4px 4px'
    }

    const position1 = {
        "width": '22vw',
        "height": '22vw',
        "transform": 'translateY(-20%)',
        "borderRadius": '40px 4px 4px 4px',
        "filter": 'drop-shadow(24px 24px 0px var(--primary-color-light))'
    }

    function handleLeftAnimation() {

        if (counter === 8) {
            setCounter(1)
        }
        else {
            setCounter(counter + 1)
        }

    }

    function handleRightAnimation() {

        if (counter === 1) {
            setCounter(imgArr.length - 2)
        }
        else {
            setCounter(counter - 1)
        }

    }



    return (
        <>
            <section className="sliderCon  ">

                <img className='arrowIcons' src={leftArrow} alt="leftArrow" onClick={() => { handleLeftAnimation() }} />

                <div className="imgCon ">
                    <div id='0'  className=" imgSliderCon  prevImg ">  </div>
                    <div id='1'  className=" imgSliderCon  currentImg ">  </div>
                    <div id='2'  className=" imgSliderCon  nextImg ">  </div>
                </div>

                <img  className='arrowIcons' src={rightArrow} alt="rightArrow" onClick={() => { handleRightAnimation() }} />

            </section>
        </>
    )
}
