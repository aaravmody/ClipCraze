import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3> Best youtube channel </h3>
            <div className="play-video-info">
                <p>15324 views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt='' />125</span>
                    <span><img src={dislike} alt='' />2</span>
                    <span><img src={share} alt='' />Share</span>
                    <span><img src={save} alt='' />Save</span>
                </div>
            </div>
            <div className="publisher">
                <img src={jack} alt='' />
                <div>
                    <p>Aarav Mody</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel to make easy</p>
                <p>Subscribe to learn</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicolson <span> 1 day ago </span></h3>
                        <p>Abey kya mast video banaya hai</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span> 244 </span>
                            <img src={dislike} />
                            <span> 244 </span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Jack Nicolson <span> 1 day ago </span></h3>
                        <p>Abey kya mast video banaya hai</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span> 244 </span>
                            <img src={dislike} />
                            <span> 244 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo