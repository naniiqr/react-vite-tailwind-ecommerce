import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const HandleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const HandleCheckout = () => {
        const orderToAdd = {
        date: '30.05.23',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
    }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
    
    return (
       <aside 
       className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border-2 border-cyan-950  rounded-lg bg-sky-100`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-bold text-2xl text-cyan-950 '>My Order</h2>
            <div>
            <XMarkIcon
             className='h-6 w-6 text-cyan-950 cursor-pointer'
             onClick={() => context.closeCheckoutSideMenu()}>
            </ XMarkIcon>
            </div>            
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
        {
            context.cartProducts.map(product => (
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price} 
                HandleDelete={HandleDelete}
                />
            ))
        }
        </div> 
        <div className='px-6'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
                <button 
                className='bg-cyan-950 py-3 text-white w-full rounded-lg mt-5 mb-6'
                onClick={() => HandleCheckout()}>Checkout</button>
            </Link>
            
        </div>
       </aside> 
    )
}

export default CheckoutSideMenu