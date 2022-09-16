import React from 'react'
import {useNavigate} from 'react-router-dom'
function Adv(){
  let navigate = useNavigate()
  return (
    <>
        <div className='slideBox'>
            <img src =  {`${process.env.PUBLIC_URL}/galaxyZFlipSlide1.jpeg`} alt="AdvImg" onClick={()=>{navigate('./about/2')}}/>
        </div>
    </>
  )
}

export default Adv