import React from 'react'
import './Card.css'

function Card({name,imageUrl}) {
  return (
    <div className="card-container">
        <h3 className="card-title">{name}</h3>
        <img className="card-image" src={imageUrl} alt={name} />
    </div>
  )
}

export default Card