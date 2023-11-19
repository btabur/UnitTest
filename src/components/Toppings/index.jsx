import axios from 'axios'
import React , {useEffect, useState} from 'react'


const Toppings = () => {
  const [toppings,setToppings] = useState([])
  const [basket,setBasket] =useState([])
  useEffect(()=>{
    axios.get('http://localhost:3025/toppings')
    .then(res=>{
     setToppings(res.data)
    })

  },[])
  const handleChange = (e, item)=> {
    e.target.checked 
    ? setBasket([...basket, item])  //sepette yoksa ekle
    : setBasket(basket.filter((i)=> i.name !== item.name)) // sebette aynı isimden ürün varsa çıkar

  
  }
  return (
    <div className='container my-5'>
      <h1>Sos Çeşitleri</h1>

      <p>
        Tanesi <span className='text-warning'>3 &#8378; </span> 
      </p>
      <h3>Soslar Ücreti: <span> {basket.length*3} &#8378;</span> </h3>

      <div className='row gap-3 mt-4'>
        {toppings.map((item,i)=> (
          <div onClick={(e)=>handleChange(e,item)}
           className='d-flex flex-column  align-items-center  py-4 rounded-4 top-card'
           key={i}>
            <label  htmlFor={item.name}>
                <img src={item.imagePath} alt={item.name}  />
                <p>{item.name}</p>
            </label>
             
              <input id={item.name} type="checkbox"  />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Toppings