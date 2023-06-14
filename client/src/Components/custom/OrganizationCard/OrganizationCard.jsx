import React from 'react'
import "./OrganizationCard.css"

const OrganizationCard = ({items}) => {
  return (
    <div className='OrganizationCard'>
        <img className='w-50' src={items.image} alt={items.name} />
        <p className='fw-bold' >{items.name}</p>
    </div>
  )
}

export default OrganizationCard