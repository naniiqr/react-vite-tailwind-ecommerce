import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageUrl, price, HandleDelete } = props
    let renderXmarkIcon 
    if (HandleDelete) {
        renderXmarkIcon = <XMarkIcon
        onClick={() => HandleDelete(id)}
         className='h-6 w-6 text-cyan-950 cursor-pointer'></XMarkIcon> 
    }
 
    return (
    <div className="flex justify-between items-center mb-3">
    <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
            <img className='w-full h-full rounded-xl object-cover' src={imageUrl} alt={title}/>
        </figure>
        <p className='text-sm font-light'>{title}</p> 
    </div>
    <div className='flex items-center gap-2'> 
        <p className='text-lg font-medium'>${price}</p>
        {renderXmarkIcon}   
    </div>
    </div>
 )
}

export default OrderCard