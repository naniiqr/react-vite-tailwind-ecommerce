import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    
    return (
       <aside 
       className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border-2 border-cyan-950 rounded-lg bg-sky-100`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-bold text-2xl text-cyan-950'>Detail</h2>
            <div>
            <XMarkIcon
             onClick={() => context.closeProductDetail()}
             className='h-6 w-6 text-cyan-950 cursor-pointer'></ XMarkIcon>
            </div>            
        </div>
        <figure className='px-6'>
            <img 
            className='w-full h-full rounded-lg' 
            src={context.productToShow.images} 
            alt={context.productToShow.title}/>
        </figure>
        <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='font-light text-sm'>{context.productToShow.description}</span>
        </p>
       </aside> 
    )
}

export default ProductDetail