import './index.css'

const CardItem = props => {
  const {value} = props
  const {title, description, imgUrl, className} = value
  const classna = `${className} card`

  return (
    <li className={classna}>
      <div className="desc">
        <h1 className="card-heading">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="img-con">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
