import React from 'react'

export default function TeamCard(props) {

    console.log(props.data.data.imagePath.split('Media\\')[1]);

    

  return (
    <>
        <div className={"" +  props.data.data.designation === 'President' ? " president teamCardSec" : "teamCardSec " }>
                <div className="imgCon ">
                    <img src={`/Media/${props.data.data.imagePath.split('Media\\')[1]}`} alt="profile" className="profileImg" />
                </div>
                <p className='title' >{props.data.data.name}</p>
                <p className='designation' >{props.data.data.designation}</p>
        </div>
    </>
  )
}
