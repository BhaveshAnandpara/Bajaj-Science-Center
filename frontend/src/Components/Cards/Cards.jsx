import React from 'react'
import './Cards.css'

export default function Cards(props) {


  return (
    <>

        <section className="cardSec">

            <p className={ props.regularActivity ? "title textAlignStart" : "title"} style={{ 'textAlign' : 'center' }} >{props.title}</p>
            <p className={ props.regularActivity ? "cardContent textAlignStart" : "cardContent"}>{props.content}</p>

        </section>

    </>
  )
}
