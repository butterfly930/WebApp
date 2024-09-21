import './Home.css'
import Header from '../../Components/Header/Header'
import Body from '../../Components/Body/Body'
import Footer from "../../Components/Footer/Footer"
import MainSection from '../../Components/Body/MainSection'
import ClientCarousel from '../../Components/Body/ClientCarousel'

function Home() {

    return (
        <>
        <div className="element">
        <Header/>
        <Body />
        </div>
        <MainSection />
        <ClientCarousel />
        <Footer />
        </>
    )
}

export default Home;
