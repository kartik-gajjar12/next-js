import React,{useState} from 'react'
import { AiFillCaretDown } from "react-icons/ai";

const NavLinks = () => {

    const [isActivated,setIsActivated]=useState(false);
    
    function toggle(){
        setIsActivated(a=>!a);
    }

  return (
    <nav>
        <ul className='outernul'>
            <li><a href='https://www.reddit.com/r/nextjs'>Posts</a></li>
            <li><a href='https://nextjs.org' >Website</a></li>
            <li><button onClick={toggle}>Github <span><AiFillCaretDown/></span></button>
                {isActivated?<div className='outerdiv' onMouseLeave={toggle}>
                    <div>Code</div> 
                    <div>Discussions</div>
                    <div>Issues</div>
                </div>:null}          
            </li>
        </ul>
    </nav>
  )
}

export default NavLinks