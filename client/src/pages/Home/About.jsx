import './home.css';
import { FaTruckPickup } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import whyChoose from "../../assets/whyChoose.jpg";
const About =() => {
    return(
<div className='about-section'>
    
    <div className='why-us'>
    <h2>Why Choose Us</h2>
        <div className='list1'>
        <div className='why-us-list'>
           <div className='icon'><FaTruckPickup /></div>
           <p>Fast and free shipping</p>
           <p>Ensures quick and free delivery to our customers</p>
           </div>
           <div className='why-us-list'>
           <div className='icon'><TiTick /></div>
           <p>Easy to shop</p>
           <p>We offer intuitive interface to our customers</p>
           </div>
           </div>
           <div className='list2'>
           <div className='why-us-list'>
           <div className='icon'><GrSupport /></div>
           <p>24/7 support</p>
           <p>We offfer live chat support and email assistance</p>
           </div>
           <div className='why-us-list'>
           <div className='icon'><HiMiniArrowsRightLeft /></div>
           <p>Greater convenience</p>
           <p>Customers can browse and shop at any time</p>
           </div>
           </div>
    </div>
    <div className='about-image'>
        <img src={whyChoose} alt='about-image' ></img>
    </div>

</div>
    )
}
export default About;