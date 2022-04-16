import s from './KaruselItem.module.scss'

const KaruselItem = props => {
  return (
      <div className={s.karuselItem}>
        <header>
          <h2>Название</h2>
        </header>
        <p>tasks</p>
      </div>
  )
}

export default KaruselItem
