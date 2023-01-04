import React from 'react'
import './AchievmentCard.css'

export default function AchievmentCard(props) {
    return (
        <>
            <div className="achievementCon">

                <div className="achievementImg">
                    <div className="AchievmentOverlay"></div>
                    <img src={`/Media/Achievments/${props.data.img}`} alt="" />
                </div>

                <div className="achievmentContent">
                    <p className="title">{props.data.name}</p>
                    <p className="cardContent">{props.data.about}</p>
                </div>
            </div>
        </>
    )
}
