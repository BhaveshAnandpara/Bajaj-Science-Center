import React from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect, useState, useRef } from 'react'
import AchievmentCard from '../../Components/AchievmentCard/AchievmentCard'
import studentAchievments from '../../Data/StudentSection/StudentSection'


export default function Achievement() {

    const [achievmentData, setAchievmentData] = useState(studentAchievments)
    const achievmentContainer = useRef()

    useEffect(() => {

        let arr = []
        const root = createRoot(achievmentContainer.current)

        achievmentData.forEach(ele => {
            arr.push(<AchievmentCard data={ele} />)
        });

        root.render(arr)


    }, [])

    return (
        <>

            <p className="red title" style={{ 'margin' : '24px 0' }} > Student’s Achievments </p>
            <div className="achievmentContainer" ref={achievmentContainer} ></div>

        </>
    )
}
