import'./css/card.css'

export default function Card({img, title,text}) {
  return (
     <div className="card-container">
        <img src={img} alt="" className="img-card" />
        <h5 className="title-card">{title}</h5>
        <p className="text-card">{text}</p>
     </div>
  )
}
