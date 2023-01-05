import React from 'react'
import './Infrastructure.css'
import { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import infraDetails from '../../Data/InfrastructureDetails/InfrastructureDetails'

export default function Infrastructure() {

  const infraCon = useRef()

  useEffect(() => {

    let arr = []
    const root = createRoot(infraCon.current)

    infraDetails.forEach((ele) => {
      arr.push(
        <>
          <div className="labSec" onClick={()=>{ window.location.href = `/admission/${ele.path}` }} >
            <img src={`/Media/InfrastructureImages/${ele.img}`} alt="image" />
            <div className="labOverlay"></div>
            <p>{ele.name}</p>
          </div>
        </>
      )
    })

    root.render(arr)

  }, [])


  return (
    <>
      <section className="InfrastructureSec">

        <p className="red title"> Our Infrastructure </p>
        <p className="cardContent">
          Our laboratories provide our students with access to the latest top-of-the-line scientific instruments and tools so that they may experiment.It has six laboratories (Physics, Chemistry, Mathematics, Biology, Electronics and Computers, Astronomy). Each laboratory is equipped for carrying out the prescribed experiments and also has the pedagogic tools and teaching aids required for imparting learning. The Centre also houses a library, an auditorium, an exhibition hall and an open-air amphitheatre. and explore.
        </p>

        <div ref={infraCon} className="infraCon"></div>

      </section>
    </>
  )
}
