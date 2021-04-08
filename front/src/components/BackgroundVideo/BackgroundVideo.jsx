import React from 'react'
import videoSource from "../../assets/institucional.mp4"


const BackgroundVideo = () => {
    return (
        <div>
            <video autoPlay="autoplay" loop="loop" muted className="img-fluid" width="100%">
                <source src={videoSource}/>
            </video>
        </div>
    )
}

export default BackgroundVideo
