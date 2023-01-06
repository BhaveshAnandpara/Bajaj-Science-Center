import React from 'react'
import './NoticeBoard.css'
import { useState } from 'react'
import { useEffect , useRef } from 'react'
import { createRoot } from 'react-dom/client'
import noticeBoardData from '../../Data/NoticeBoardData/NoticeBoard'

export default function NoticeBoard() {

    const [noticeData, setNoticeData] = useState(noticeBoardData)
    const noticeCon = useRef()

    useEffect(() => {

        const arr = []
        const root = createRoot(noticeCon.current)

        noticeData.forEach(( ele )=>{
            arr.push(
                <>
                    <div className="noticeContainer ">
                            <p className="cardContent">{ele.notice}</p>
                            <button className='primaryBtn' onClick={()=>{ window.location.href = ele.link }} >View List</button>
                    </div>
                </>
            )
        })

        root.render(arr)
        


    }, [])
    

    return (
        <>
            <section className="noticeSec">

                <div className="noticeCon" ref={noticeCon} ></div>

            </section>
        </>
    )
}
