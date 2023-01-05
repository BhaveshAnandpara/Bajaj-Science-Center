import React from 'react'
import './StudentSection.css'
import { useEffect, useState } from 'react'
import studentAchievments from '../../Data/StudentSection/StudentSection'
import simulationDetails from '../../Data/Simulations/Simulations'
import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import AchievmentCard from '../../Components/AchievmentCard/AchievmentCard'

export default function StudentsSection() {

    const [achievmentData, setAchievmentData] = useState(studentAchievments)
    const achievmentContainer = useRef()
    const simulationCon = useRef()

    useEffect(() => {

        let arr = []
        let simulationArr = []
        const root = createRoot(achievmentContainer.current)
        const simulationRoot = createRoot(simulationCon.current)

        for (let i = 0; i < 2; i++) {
            arr.push(<AchievmentCard data={achievmentData[i]} />)
        }

        root.render(arr)

        simulationDetails.forEach((ele) => {
            simulationArr.push(
                <>
                    <div className="labSec" onClick={() => { window.location.href = `studentsection/simulations/${ele.path}` }} >
                        <img src={`/Media/Simulations/${ele.img}`} alt="image" />
                        <div className="labOverlay"></div>
                        <p>{ele.name}</p>
                    </div>
                </>
            )
        })

        simulationRoot.render(simulationArr)


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

                    <button className="primaryBtn" onClick={() => { window.location.href = '/studentsection/Achievements' }} >
                        Achievements
                    </button>
                </div>

                <p className="red title"> Simulations </p>

                <div className="simulationCon" ref={simulationCon} > </div>


            </section>
        </>
    )
}
