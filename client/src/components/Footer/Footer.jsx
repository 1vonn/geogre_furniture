import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import {Link} from 'react-router-dom';
const Footer =() =>{
    return(
        <section className='footer-content'>
            <div className='footer-content-item'>
                <div className='footer-content-list'>
                    <h2>All Categories</h2>
                    <p>Dining chairs</p>
                    <p>Sofas</p>
                    <p>Tables</p>
                    <p>TV stands</p>
                    <p>Beds</p>
                </div>
                <div className='footer-content-list2'>
                    <h2>Contact Us</h2>
                    
                    <div className='footer-icon'><FaPhoneAlt />
                    </div>
                    <p>0798778928</p>
                    
                    
                    <div className='footer-icon'><MdEmail /></div>
                    <p>geogre@gmail.com</p>
                    
                    <div className='footer-icon'><FaInstagramSquare /></div>
                    <p>geogre-furniture</p>
                    
                </div>
                <div className='footer-content-list3'>
                    <h2>Quick Links</h2>
            
                <p><Link to="/">Home</Link></p>
                <p><Link to="/shop">Shop</Link></p>
                <p><Link to="/products">Products</Link></p>
                <p><Link to="/order">Contact Us</Link></p>
                <p><Link to="/">Order</Link></p>
            
                </div>
            </div>
        </section>
    )
}
export default Footer;