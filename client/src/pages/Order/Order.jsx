import OrderForm from "./OrderForm";
import ViewOrder from "./ViewOrder";
import './order.css';
const Order =() => {
    return(
<section className="order-content">
<OrderForm/>
<ViewOrder/>
</section>
    )
}
export default Order;