import s from './Karusel.module.scss'
import KaruselItem from './KaruselItem/KaruselItem'
import arrow from '../../../img/arrow.png'
const Karusel = props => {
  return (
    <div className={s.karuselContainer}>
      <img src={arrow} alt="left" className={s.arrowLeft}/>
      <img src={arrow} alt="right" className={s.arrowRight}/>
      <div className={s.karusel}>
        <KaruselItem/>
        <KaruselItem/>
        <KaruselItem/>
        <KaruselItem/>
      </div>
      
    </div> 
  )
}

export default Karusel
