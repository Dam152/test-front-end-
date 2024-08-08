import '/src/Components/css/carousel-item.css'
import arrowCardCarousel from '/src/assets/img/arrowCardCarousel.svg'


export default function CarouselItem({img, title}) {
  return (
    <div className="carousel-item">
         <img src={img} alt="" className="img-carousel-item" />
         <h4 className="title-card-carousel">{title}</h4>

         <div className="button-card-carousel">
            <span className="text-card-carousel">scopri di piu</span>
            <img  src={arrowCardCarousel} alt='arrowCardCarousel' className="arrow-carousel"/>
         </div>
    </div>
  )
}
