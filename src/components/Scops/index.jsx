
import React, { useEffect, useState } from 'react'
import Card from '../Card'
import axios from 'axios'
const Scops = () => {
    const [scopsData,setScopsData] = useState([])
    const [basket,setBasket]=useState([])
    useEffect(()=> {
        axios.get("http://localhost:3025/scops")
        .then((res)=> setScopsData(res.data))
        .catch((error)=> console.log(error))
    },[])
   
  return (
    <div className='container'>
        <h1>Dondurma Çeşitleri</h1>
        <p>Tanesi 20 &#8378;</p>
        <h2>Çeşitler Ücreti:{basket.length*20} &#8378;</h2>

        <div className='row gap-5 justify-content-between '>
            {scopsData?.map((scop,index)=>(
                <Card 
                key={index}
                basket={basket}
                setBasket={setBasket}
                scop={scop}/>
            ))}
        </div>

    </div>
  )
}

export default Scops