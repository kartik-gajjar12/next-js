import React,{useState,useEffect} from 'react'
import Card from './Card';

const Cards = () => {

  const [data, setData] = useState([]);

  const fetchData =async () => {
    const apidata=await fetch("https://www.reddit.com/r/nextjs.json");
    const res=await apidata.json();

    const cards=[];

    for (let index = 0; index < res.data.children.length; index++) {
        cards.push(res.data.children[index]);
    }

    setData(cards);
    
  }

  useEffect(() => {
    fetchData();  
    
    },[])

    

  return (
    <div className='cardsdiv'>
        {data.map((Carddata,i)=>(<Card data={Carddata} key={i}/>))}
        
    </div>
  )
}

export default Cards