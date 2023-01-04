import React from 'react'
import './TestimonialsCard.css'

export default function TestimonialsCard(props) {
    return (
        <>
            <section className="cardCon ">
                <img src={`/Media/TestimonialImages/${props.data.img}`} alt="" />
                <p className='title' style={{'margin' : '0'}}  >{props.data.name}</p>
                <p>{props.data.about}</p>
            </section>
        </>
    )
}
