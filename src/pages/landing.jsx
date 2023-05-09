import Navbar from '../components/navbar';
import Intro from '../components/intro';
import Faqs from '../components/faqs';
import Stats from '../components/stats';
import System from '../components/system';
import Team from '../components/team';
import Footer from '../components/footer';

function Landing(){

    return(
        <>
           <Navbar/>
           <Intro/>
           <System/>
           <Stats/>
           <Faqs/>
           <Footer/>
        </>
    )
}
export default Landing;