import React from 'react'
import { useRef , useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './Testimonials.css'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import testimonialsArr from '../../Data/Testimonials/Testimonial'

export default function Testimonials() {


    const testimonialsCon = useRef()

    useEffect(() => {

        console.log(testimonialsArr)

        let eleArr = []
        const root = createRoot(testimonialsCon.current)

        testimonialsArr.forEach(( ele )=>{
            eleArr.push( <TestimonialsCard data={ele} /> )
        })

        root.render(eleArr)

    }, [])
    

    return (
        <>
            <section className="testimonialsSec">

                <p> Our Students on Bajaj Science Education Center </p>
                <div className="testimonialsCon" ref={testimonialsCon} > </div>

            </section>
        </>
    )
}
