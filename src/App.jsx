
import './App.css'
import CardsContainer from './Components/CardsContainer'
import CarouselSection from './Components/CarouselSection'
import Cta from './Components/Cta'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Planetario from './Components/Planetario'

function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Header></Header>
     <CardsContainer></CardsContainer>
     <Planetario></Planetario>
     <CarouselSection></CarouselSection>
     <Cta></Cta>
     <Footer></Footer>
    </>
  )
}

export default App
