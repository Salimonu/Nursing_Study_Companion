import { BsWhatsapp } from 'react-icons/bs';

import FakePromoCountdown from '@/ui/FakePromoCountdown';
import SubscriptionCard from '@/ui/SubscriptionCard';

function SubscriptionPage() {
  return (
    <div className="min-h-90 py-8 px-8 sm:px-20 text-2xl">
      <p className="md:w-[60%] mx-auto text-center mb-8 text-white bg-blue-500 font-semibold px-6 py-6 rounded-2xl">
        {' '}
        <span className="block md:inline"> 🚀🚀🚀</span> Gain{' '}
        <span className="underline"> Unlimited Access</span> to ALL questions
      </p>

      <div className='flex gap-10 justify-center flex-wrap px-8'>
        <SubscriptionCard bg="bg-gray-200" title="Basic" price="₦1000/month" promo="₦500/month" />
        <SubscriptionCard bg="bg-blue-300" title="Medium" price="₦4800/6months" promo="₦2400/6months" />
        <SubscriptionCard bg="bg-gray-200" title="Advanced" price="₦8400/year" promo="₦4200/year" />        
      </div>

      <div className="md:w-[60%] mx-auto">
        
        {/* </div> */}
        <p className="text-center mt-10 mb-6 text-white bg-blue-500 font-semibold px-6 py-6 rounded-2xl">
          {/* <p className=" text-blue-700 font-semibold mb-4"> */}
          <span className="block md:inline">⭐⭐⭐</span> Upgrade your account
          in 3 simple steps
        </p>
        {/* </p>{' '} */}
        <p className="flex gap-4 items-center mb-4 border-2 border-blue-500 rounded-2xl p-4">
          <span className="font-black text-6xl">1</span>
          <span>
            <p className=" mb-4">
              {' '}
              Make transfer to the account below:{' '}
            </p>{' '}
            <p className=" mb-2">
              Bank: <strong>Opay</strong>{' '}
            </p>{' '}
            <p className=" mb-2">
              Account Number: <strong> 8101747514 </strong>{' '}
            </p>
            <p>
              {' '}
              Account Name: <strong>Salimonu Hammed A </strong>
            </p>
          </span>
        </p>
        <p className="flex gap-4 items-center mb-4 border-2 border-blue-500 rounded-2xl p-4">
          <span className="font-black text-6xl">2</span>
          <span>
            <span className="inline-block mb-4">
              Send your payment RECEIPT and USERNAME to:
            </span>{' '}
            <br />

            <span className="flex gap-4 items-center">
              <a
                href="https://wa.me/2348101747514"
                target="_blank"
                className="underline"
              >
                Admin
              </a>{' '}
              <a
                href="https://wa.me/2348101747514"
                target="_blank"
                className="underline"
              >
                Click here
              </a>{' '}
              <a href="https://wa.me/2348101747514" target="_blank">
                <BsWhatsapp size={24} color="#193cb8" />
              </a>
            </span>
          </span>
        </p>
        <p className="flex gap-4 items-center mb-4 border-2 border-blue-500 rounded-2xl p-4">
          <span className="font-black text-6xl">3</span>
          <span>
            Access <strong>ALL Questions</strong> after 24hrs
          </span>
        </p>
      </div>
      </div>

  );
}

export default SubscriptionPage;
