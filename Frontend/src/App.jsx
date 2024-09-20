import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import MainSection from './Components/Body/MainSection'
import ClientCarousel from './Components/Body/ClientCarousel'

function App() {

  return (
    <>
    <div className="element">
    <Header/>
    <Body />
    </div>
    <MainSection />
    <ClientCarousel />
    </>
  )
}

export default App;
