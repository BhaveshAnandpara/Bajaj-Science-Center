import React from 'react'
import './Cards.css'

export default function Cards(props) {
  return (
    <>

        <section className="cardSec">

            <p className="title" style={{ 'textAlign' : 'center' }} >{props.title}</p>
            <p className="cardContent">{props.content}</p>

        </section>

    </>
  )
}
