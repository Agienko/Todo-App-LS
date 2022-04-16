import s from './Karusel.module.scss'
import KaruselItem from './KaruselItem/KaruselItem'

const Karusel = props => {
  return (
    <div className={s.karusel}>
     <KaruselItem/>
     <KaruselItem/>
     <KaruselItem/>
     <KaruselItem/>
     
    </div>
         
  )
}

export default Karusel
