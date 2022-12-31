import React from 'react'
import {RxThickArrowUp,RxThickArrowDown} from 'react-icons/rx'
import {VscComment} from 'react-icons/vsc'
import {TfiShare} from 'react-icons/tfi'
import {BsSave,BsThreeDots} from 'react-icons/bs'

const Card = ({data}) => {
  return (
    <div className='carddiv'>
        <div className='scorepanel'>
            <div><button><RxThickArrowUp/></button></div>
            <div style={{marginBottom:"5px",fontWeight:"bold"}}>{data.data.score}</div>
            <div><button><RxThickArrowDown/></button></div>
        </div>
        <div className='datapanel'>
            <div className="title_des">Posted by u/{data.data.author} </div>

            <div className="headline"><span>{data.data.title}</span></div>

            {data.data.selftext?<div>{data.data.selftext}</div>:null}

            {data.data.url_overridden_by_dest?<div className='url_overriden'><a href={data.data.url_overridden_by_dest}>{data.data.url_overridden_by_dest}<span><TfiShare/></span></a></div>:null}
            

            <div className="footerpanel">
                <div><a href={data.data.url}><span><VscComment/> </span>{data.data.num_comments} Comments</a></div>
                <button><span><TfiShare/></span>share</button>
                <button><span><BsSave/></span>save</button>
                <button><span><BsThreeDots/></span></button>
            </div>
            
        </div>

    </div>
  )
}

export default Card