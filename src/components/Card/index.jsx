import React from 'react'

const Card = ({scop,basket,setBasket}) => {

    const found = basket.filter((item)=> item.name ===scop.name)
    const amount = found.length
   
    const handleReset = ()=> {
        const clearArray = basket.filter((item)=> item.name != scop.name)
        setBasket(clearArray)

    }
  return (
    <div
    style={{width:"150px"}}
    className='d-flex flex-column align-items-center'>
        <img style={{height:'200px'}} className='img-fluid rounded' src={scop.imagePath} alt="type" />
        <label htmlFor="">{scop.name}</label>
        <div className='d-flex align-items-center gap-2 mt-2'>
            <button
            onClick={handleReset}
            className='btn btn-danger'>Sıfırla</button>
            <span className='fs-2'>{amount}</span>
            <button onClick={()=> setBasket([...basket,scop])} className='btn btn-success '>Ekle</button>
        </div>
    </div>
  )
}

export default Card