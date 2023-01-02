import React from 'react'
import { useRef , useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './Testimonials.css'
import img from '../../Assets/Media/BSCLogo.png'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'

export default function Testimonials() {

    const testimonialsArr = [
        {
            "img" : img,
            "name" : "Wade Warren",
            "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum."
        },
        {
            "img" : img,
            "name" : "Jenny Wilson",
            "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat metus a at ut dis accumsan feugiat feugiat vel. Euismod fames aliquet purus amet elit turpis vitae scelerisque. Mauris at lectus aliquet gravida eros. Diam morbi arcu, amet, in nunc enim, fermentum."
        }
    ]

    const testimonialsCon = useRef()

    useEffect(() => {

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
