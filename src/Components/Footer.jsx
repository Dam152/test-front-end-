import './css/footer.css'
import logo from '/src/assets/logo.svg'
import { loghi } from '../data'
export default function Footer() {
  return (
     <footer>
        <div className="footer-container">
           <img src={logo}alt="logo "  className='logo-footer'/>
           <div className="divider"></div>
           <div className="voice-footer-container">
            <div className="column-foot">
                <p className="title-footer">Azienda agricola</p>
                 <a href="#" className="foot-voice">Azienda</a>
                 <a href="#" className="foot-voice">Allevamenti</a>
                 <a href="#" className="foot-voice">Bottega agricola</a>
                 <a href="#" className="foot-voice">Punti vendita</a>
            </div>
            <div className="column-foot">
                <p className="title-footer">Azienda agricola</p>
                 <a href="#" className="foot-voice">Attività scuole</a>
                 <a href="#" className="foot-voice">Attività per grandi e piccoli</a>
                 <a href="#" className="foot-voice">Planetario</a>
                 <a href="#" className="foot-voice">Fattoria sociale</a>
            </div>

            <div className="column-foot">
                <p className="title-footer">Agriturismo</p>
                <p className="title-footer">Bio e sostenibilità</p>
                <p className="title-footer">TURISMO E TERRITORIO</p>
                <p className="title-footer">CONTATTI</p>
            </div>

            <div className="loghi-container">
                {loghi.map((logo)=>(
                    <img src={logo.img} alt="logo" key={logo.id} />
                ))}
            </div>
           </div>
           <div className="divider"></div>

           <div className="credits">
                <div className="enterprise-container">
                    <p className="name-enterprise">Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare</p>
                    <h5 className="p-iva">P.IVA 02322540184</h5>
                </div>
                <div className="devloper">
                    <span> ✏️code <a href="#">Emiliano Bucci</a></span>
                    <span>🎨design <a href="#">Michele Fasani</a></span>
                </div>
            </div>
        </div>
     </footer>
  )
}
