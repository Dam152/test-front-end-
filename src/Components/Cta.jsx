import {  Zoom } from 'react-awesome-reveal'
import './css/cta.css'
import ctaImg from '/src/assets/img/cta.jpeg'
import emailLogo from '/src/assets/img/email.svg'

export default function Cta() {
  return (
      <section className='cta'>
        <Zoom>
        <div className="img-container">
            {/* <img src={ctaImg} alt="ctaImg" className="cta-image" /> */}
            <div className="img-overlay"></div>
            <div className="text-cta-container">
                <h4 className="title-cta">Rimani aggiornato</h4>
                <p className="text-cta">Per non perderti nessuna novità!</p>
                <form  className="cta-form">
                    <img src={emailLogo} alt="email-logo" className="email-logo" />
                    <input type="email" placeholder='Email' required className='input-email' />
                    <div className='button-cta'><h5 className='text-button-cta'>Iscriviti</h5></div>
                </form>
            </div>
           
        </div>
        </Zoom>
         
      </section>
  
  )
}
