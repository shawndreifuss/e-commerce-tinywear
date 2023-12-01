// lazy query = a query that doesnt get ran right away
import axios from 'axios'
import { useSelector }  from 'react-redux'
const url = local



const checkoutButton = ({ cartItems }) =>  { 

     const user = useSelector((state) => state.auth)

console.log(cartItems)
    const handleCheckout = () => {
       axios.post('http://localhost:3000//stripe/create-checkout-session', {
       cartItems,
       userId: user.id
}).then((res) => {
    if(res.data.url){
        window.location.href = res.data.url
    }
}).catch((err) => console.log(err.message))
    }
    return (
        <>
            <button onClick={() => handleCheckout()}> Checkout! </button>
        </>
    );
}

export default checkoutButton


// Add buttons to products
//<checkoutButton cartItems = {cart.cartItems} />