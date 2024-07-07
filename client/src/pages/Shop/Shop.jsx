import './shop.css'
import sofa from "../../assets/sofa.jpg";
import bed from "../../assets/bed.jpg";
import tvStand from "../../assets/tvStand.jpg";
import table from "../../assets/table.jpg";
import spaciousSofa from "../../assets/spaciousSofa.jpg";
import chair from "../../assets/chair.jpg";
import { FaStar } from "react-icons/fa";
const Shop =() =>{
    return(
        
<div className='shop-content'>
    
    
    <div className='shop-content-items'>
        <img src={chair} alt='shop image' ></img>
        <div className='rating-icon'><FaStar /></div>
        <p className='shop-name'>Dining chair</p>
        <p className='shop-price'>$30.00</p>
        <a href='order' className='order-now-link'>Order Now</a>
    </div>
    <div className='shop-content-items'>
        <img src={sofa} alt='shop image'></img>
        <div className='rating-icon'><FaStar /></div>
        <p className='shop-name'>Sofa</p>
        <p className='shop-price'>$35.00</p>
        <a href='order' className='order-now-link'>Order Now</a>
    </div>
    <div className='shop-content-items'>
        <img src={bed} alt='shop image'></img>
        <div className='rating-icon'><FaStar /></div>
        <p className='shop-name'>Bed</p>
        <p className='shop-price'>$50.00</p>
        <a href='order' className='order-now-link'>Order Now</a>
    </div>
    <div className='shop-content-items'>
        <img src={tvStand} alt='shop image'></img>
        <div className='rating-icon'><FaStar /></div>
        <p className='shop-name'>Tv stand</p>
        <p className='shop-price'>$25.00</p>
        <a href='order' className='order-now-link'>Order Now</a>
    </div>
    <div className='shop-content-items'>
        <img src={table} alt='shop image'></img>
        <div className='rating-icon'><FaStar /></div>
        <p className='shop-name'>Table</p>
        <p className='shop-price'>$60.00</p>
        <a href='order' className='order-now-link'>Order Now</a>
    </div>
    <div className='shop-content-items'>
        <img src={spaciousSofa} alt='shop image'></img>
        <div className='rating-icon'><FaStar /></div>
        <p className='shop-name'>Spacious Sofa</p>
        <p className='shop-price'>$80.00</p>
        <a href='order' className='order-now-link'>Order Now</a>
    </div>
</div>
    )
}
export default Shop;