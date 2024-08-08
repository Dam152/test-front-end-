import Card from './Card'
import './css/cards-container.css'
import {cards} from '../data'
import { Bounce, Slide } from 'react-awesome-reveal'

export default function CardsContainer() {
  return (
     <section className='cards-container'>
        <div className="cards">
            {cards.map((card)=>(
               <Slide>
                   <Card key={card.id} img={card.img} title={card.title} text={card.text}></Card>
               </Slide>
            ))} 
        </div>
       <Bounce> <div className="button-card"><span className="text-button">Scopri tutti gli eventi</span></div></Bounce>
     </section>
  )
}
