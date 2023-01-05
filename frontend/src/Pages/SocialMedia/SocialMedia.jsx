import React from 'react'
import './SocialMedia.css'
import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import socialsData from '../../Data/SocialMedia/SocialMedia'

export default function SocialMedia() {

    const socialsCon = useRef()

    useEffect(() => {

        let arr = []
        const root = createRoot(socialsCon.current)

        socialsData.forEach((ele) => {
            arr.push(
                <>
                    <div className="socialDiv ">

                        <img src={`/Media/SocialMedia/${ele.QRimg}`} alt="" className="SocialQr" />

                        <div className="SocialContent ">

                            <div className="socialHeader ">

                                <img src={`/Media/SocialMedia/${ele.icon}`} alt="" className="socialIcon" />
                                <div>
                                    <p>{ele.name}</p>
                                    <p>{ele.numbers}</p>
                                </div>
                            </div>
                            <button className="primaryBtn" onClick={()=>{ window.location.href = `${ele.path}` }} >{ele.btnContent}</button>
                        </div>
                    </div>
                </>
            )
        })

        root.render(arr)


    }, [])


    return (
        <>
            <section className="socialSec">
                <div className="socialsCon " ref={socialsCon} ></div>
            </section>
        </>
    )
}
