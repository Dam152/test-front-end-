import { Bounce, Roll, Rotate, Zoom , Fade} from 'react-awesome-reveal'
import './css/planetario.css'
import planetarioImg from '/src/assets/img/planetario.png'
export default function Planetario() {
  return (
    <section className='planetario'>
        <div className="column-plan-1">
        <Zoom> <img src={planetarioImg} alt="planetario" className='planetario-img'/></Zoom>
        </div>
        <div className="column-plan-2">

           <Zoom> 
                <h3 className="title-plan">Il Planetario</h3>
                <p className="text-plan">Finalmente il nostro planetario vi potrà accogliere anche nei mesi invernali. Ci aspettano una serie di appuntamenti pomeridiani -sabato pomeriggio -per scoprire i segreti del cielo e una serie di appuntamenti speciali dedicati alla Ruota dell'Anno Celtico.</p>
            </Zoom>

           <Bounce> <div className="button-plan"><span className="text-button-plan">Visita il planetario</span></div></Bounce>
        </div>
    </section>
  )
}
