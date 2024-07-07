import './home.css';
import Hero from "./Hero";
import About from './About';

function Home () {
    return(
        <section className="home">
            <Hero/>
            <About/>
        </section>
    )
}
export default Home