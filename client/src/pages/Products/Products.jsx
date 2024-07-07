import './product.css'
import sofa from "../../assets/sofa.jpg";
import bed from "../../assets/bed.jpg";
import tvStand from "../../assets/tvStand.jpg";
import table from "../../assets/table.jpg";
import spaciousSofa from "../../assets/spaciousSofa.jpg";
import chair from "../../assets/chair.jpg";
import bed2 from "../../assets/bed2.jpg";
import diningChair from "../../assets/diningChair.jpg";
import spaciousTable from "../../assets/spaciousTable.jpg";
import doubleBed from "../../assets/doubleBed.jpg";
import fancySofa from "../../assets/fancySofa.jpg";
import luxuriousChair from "../../assets/luxuriosChair.jpg"
const Products =() => {
    return(
<div className='products-items'>
<div className='product-content-items'>
        <img src={chair} alt='shop image' ></img>
        <p className='shop-name'>Dining chair</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={spaciousSofa} alt='shop image' ></img>
        <p className='shop-name'>Spacious Sofa</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={sofa} alt='shop image' ></img>
        <p className='shop-name'>Sofa</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={table} alt='shop image' ></img>
        <p className='shop-name'>Table</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={bed} alt='shop image' ></img>
        <p className='shop-name'>Bed</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={tvStand} alt='shop image' ></img>
        <p className='shop-name'>TV stand</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={bed2} alt='shop image' ></img>
        <p className='shop-name'>Spacious bed</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={diningChair} alt='shop image' ></img>
        <p className='shop-name'>Dining chair</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={spaciousTable} alt='shop image' ></img>
        <p className='shop-name'>Spacious Table</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={doubleBed} alt='shop image' ></img>
        <p className='shop-name'>Double bed</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={luxuriousChair} alt='shop image' ></img>
        <p className='shop-name'>Luxurious dining chair</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
    <div className='product-content-items'>
        <img src={fancySofa} alt='shop image' ></img>
        <p className='shop-name'>Fancy sofa</p>
        <p className='shop-price'>$30.00</p>
        <p className='item-description'></p>
    </div>
</div>
    )
}
export default Products;