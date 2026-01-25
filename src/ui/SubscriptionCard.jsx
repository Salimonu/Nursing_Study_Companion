import React from 'react'
import FakePromoCountdown from './FakePromoCountdown'

const SubscriptionCard = ({title, price, promo, bg}) => {
  return (
    <div>
      <div className={`${bg} w-[320px] text-xl  bg-blue-200 px-6 py-6 rounded`}>
          <h2 className='uppercase mb-2 text-3xl font-semibold text-center'>{title}</h2>
            {title === 'Medium'? <p className='bg-orange-600 text-white text-center py-1 rounded mb-2'>Save <strong>20%</strong> cost</p>: title === 'Advanced'? <p className='bg-orange-600 text-white text-center py-1 rounded mb-2'>Save <strong>30%</strong> cost</p>: <p className=' py-1 rounded mb-2 text-transparent'>placeholder</p> }
            <p className="flex gap-1 mb-2 ">
              <span>💶</span>{' '}
              <span>
                {' '}
                Price: <span className="line-through">{price}</span>
              </span>
            </p>
            <p className="flex gap-1 mb-2">
              <span>🎉 </span>{' '}
              <span>
                Enjoy 50% discount: Promo = <strong>{promo}</strong>
              </span>
            </p>
            {/* <p className="flex gap-1 mb-2">📆{' '} */}
              <p className='mb-2 mt-2 bg-orange-400 text-white text-center py-1 rounded'>PROMO ends in <strong> 3days</strong></p>
              
            {/* </p> */}
            <FakePromoCountdown />{' '}
          
        </div>
    </div>
  )
}

export default SubscriptionCard
