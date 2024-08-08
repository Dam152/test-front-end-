import './css/header.css'
import headerImg from '../assets/img/header.png'
import { Fade } from 'react-awesome-reveal'
export default function Header(){
    return(
        <>
            <section className="header">
                <div className="text-header-container">
                   <Fade>
                    <h1 className="title-header"><span className="gradient-title">Soulfarm</span> Agricoltura familiare</h1>
                    <h4 className="text-header">L’azienda è certificata biologica ed è composta da orto, frutteto e pascolo.</h4>
                   </Fade>
                </div>
                <img src={headerImg}alt="header" className='img-header' />
            </section>
        </>
    )
}