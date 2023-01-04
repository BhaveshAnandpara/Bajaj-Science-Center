import React from 'react'
import './StudentSection.css'
import { useEffect, useState } from 'react'
import studentAchievments from '../../Data/StudentSection/StudentSection'
import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import AchievmentCard from '../../Components/AchievmentCard/AchievmentCard'

export default function StudentsSection() {

    const [achievmentData, setAchievmentData] = useState(studentAchievments)
    const achievmentContainer = useRef()

    useEffect(() => {

        let arr = []
        const root = createRoot(achievmentContainer.current)

        for (let i = 0; i < 2; i++) {
            arr.push(<AchievmentCard data={achievmentData[i]} />)
        }

        root.render(arr)


    }, [])


    return (
        <>
            <section className="studentSec">

                <p className="red title"> Student’s Achievments </p>
                <div className="achievmentContainer" ref={achievmentContainer} ></div>

                <div className="checkAchievments">

                    <p className="cardContent">
                        Our Student's have some Amazing Achievements Checkout More Achievments Here
                    </p>

                    <button className="primaryBtn" onClick={()=>{ window.location.href='/studentsection/Achievements' }} >
                        Achievements
                    </button>

                </div>
            </section>
        </>
    )
}
