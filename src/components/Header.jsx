import React,{useState} from 'react';
import {MdOutlineLocalFireDepartment} from 'react-icons/md';
import {TiStarburstOutline} from 'react-icons/ti';
import {BiArrowToTop} from 'react-icons/bi';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineRise} from 'react-icons/ai';



const Header = () => {
    
    const [isActivated,setIsActivated]=useState(false);
    
    function toggle(){
        setIsActivated(a=>!a);
    }

  return (
    <div className='headerdiv'>
        <div className='startpart'>
            <a className='hotlink' href='https://www.reddit.com/r/nextjs/hot'><span><MdOutlineLocalFireDepartment/></span>Hot</a>
            <div id="mobileview">
            <a href='https://www.reddit.com/r/nextjs/new'><span><TiStarburstOutline/></span>New</a>
            <a href='https://www.reddit.com/r/nextjs/top'><span><BiArrowToTop/></span>Top</a>
            <div style={{position:"relative",display:"inline-block"}}>
            <button onClick={toggle}><span style={{top:"3px",position:"relative"}}><BsThreeDots/></span></button>
            {isActivated?<div className='headerinnerdiv'>
                            <div><span style={{position:"relative",top:"2px",marginRight:"9px"}}><AiOutlineRise/></span>Rising</div>
                        </div>:null} 
            </div>
            </div>
            </div>
        <div className='endpart'>
          <select name="mode" id="mode">
            <option defaultChecked value="1">Card &nbsp;&nbsp;&nbsp;&nbsp; &#9662;</option>
            <option value="2" >Classic</option>
            <option value="3">Compact</option>
          </select>
        </div>
    </div>
  )
}

export default Header

