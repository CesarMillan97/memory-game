import React from 'react'

export default function SingleCard(props) {
   
  return (
     <div className='card-grid'>
      {props.cards.map(card => (
         <div className='card' key={card.id}>
         <div>
            <img className='front' src={card.src} alt='card front'></img>
            <img className='back' src='./img/cover.png' alt='card back'></img>
         </div>
         </div>
      ))}
    </div>
  )
}
