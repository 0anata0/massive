import React from 'react'
import '../../index.css'

const Button = (props) => {
  const {children, style, onClick } = props
  return (
    <div className='justify-content-center align-items-center d-flex'>
    <button className='buttonBooking' onClick={onClick}>
      {children}
    </button>
    </div>
  )
}

export default Button