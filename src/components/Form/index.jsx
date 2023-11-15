import React, { useState } from 'react'

const Form = () => {

    /* eğer check box tik li değilse
    * disabled özelliği true olacak değilse false olacak
    * buton hover ise koşulları okudum anladım ütüne p etiketini göster


    */

    const [isChecked,setIschecked] = useState(false)
    const [isHover,setIsHover] = useState(false)
  return (
    <div className='d-flex justify-content-center gap-3 align-items-center my-4 '>
        <input
        onChange={(e)=> setIschecked(e.target.checked)}
        className='form-check-input' type="checkbox" />
        <div className='terms'>
            <p 
            style={{visibility: isHover ? 'visible':'hidden'}}
            className='bg-light text-black p-2 rounded '>Size gerçekten bir şey teslim etmeyeceğiz</p>
            <label className='lead ' htmlFor="">
                Koşulları okudum ve kabul ediyorum
            </label>
        </div>
        <button
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        disabled={!isChecked}
         className='btn btn-warning '>Siparişi Onayla</button>
    </div>
  )
}

export default Form