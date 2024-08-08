
import './css/navbar.css'
import logo from '../assets/logo.svg'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


export default function Navbar(){
    const[isOpen , setIsOpen] = useState(false)
    
    return(
        <>
            <nav>
                <img src={logo} alt="logo" className='logo-nav'/>
                <div className="menu">
                    <a href="#" className="menu-items">Azienda agricola</a>
                    <a href="#" className="menu-items">Fattoria didattica</a>
                    <a href="#" className="menu-items">Agriturismo</a>
                    <a href="#" className="menu-items">Bio e sostenibilità</a>
                    <a href="#" className="menu-items">Turismo e territorio</a>
                    <a href="#" className="menu-items">Dove siamo</a>
                </div>

                {
                    !isOpen ? 
                    <IoMdMenu className='h-menu' onClick={()=>{setIsOpen(!isOpen)}}></IoMdMenu>
                    :<IoMdClose className='h-menu'onClick={()=>{setIsOpen(!isOpen)}}></IoMdClose>
                }

               {isOpen &&
                 <div className='toggle-menu'>
                    <a href="#" className="menu-items">Azienda agricola</a>
                    <a href="#" className="menu-items">Fattoria didattica</a>
                    <a href="#" className="menu-items">Agriturismo</a>
                    <a href="#" className="menu-items">Bio e sostenibilità</a>
                    <a href="#" className="menu-items">Turismo e territorio</a>
                    <a href="#" className="menu-items">Dove siamo</a>
                </div>
               }
                
            </nav>
        </>
    )
}