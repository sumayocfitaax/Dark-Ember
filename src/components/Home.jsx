import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import ShopSection from './ShopSection'
import TestimonialSection from './TestimonialSection'
import Hero from './Hero'

function Home(){
    return <div>
        <Hero/>
        <ShopSection/>
        <AboutSection/>
        <TestimonialSection/>
        <ContactSection/>
        <Footer/>
    </div>
}
export default Home