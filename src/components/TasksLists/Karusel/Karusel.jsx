import s from './Karusel.module.scss'
import KaruselItem from './KaruselItem/KaruselItem'
import arrow from '../../../img/arrow.png'
import { useState } from 'react'
const Karusel = props => {

  const CARD_WIDTH = 150
  const [move, setMove] = useState(0)

  const leftClick = () => {
setMove(move + CARD_WIDTH )
  }
  const rightClick = () => {
    setMove(move > 0 ? move - CARD_WIDTH : 0)
  }

  return (
    <div className={s.karuselContainer}>
      <img src={arrow} alt="left" className={s.arrowLeft} onClick={leftClick}/>
      <img src={arrow} alt="right" className={s.arrowRight} onClick={rightClick}/>
      <div className={s.karusel} >
        <div className={s.karuselWindow}  style={{ transform: `translateX(${move}px)` }}>
        {Object.entries(props.tasksLists).map( (list, i) => 
          <KaruselItem color={!!(i % 2)} name={list[0]} todos={list[1]} key={list[0]} id={list[0]}/>)}
        </div>
       
      </div>
      
    </div> 
  )
}

export default Karusel
