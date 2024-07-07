import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import contact from "../../assets/contact.jpg";
import './customer.css';
const Customer =() => {
    return(
        <div className="customer-content">
             <div className='customer-care'>
        <h2>Customer Care</h2>
        <div  className='icon'><FaPhoneAlt /></div>
        <p>0798778928</p>
        <div  className='icon'><MdEmail /></div>
        <p>geogre@gmail.com</p>
        <div  className='icon'><FaInstagramSquare /></div>
        <p>geogre-furniture</p>
        <div  className='icon'><FaSquareXTwitter /></div>
        <p>geogre-furniture</p>
    
      </div>
      <div className='img'>
        <img src={contact} alt=''></img>
      </div>
        </div>
    )
}
export default Customer;