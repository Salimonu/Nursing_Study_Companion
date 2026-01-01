import FakePromoCountdown from '@/ui/FakePromoCountdown';
import { BsWhatsapp } from 'react-icons/bs';

function SubscriptionPage() {
  return (
    <div className="min-h-90 p-10 text-2xl">
      <p className="md:w-[60%] mx-auto text-center mb-8 text-white bg-blue-500 font-semibold px-8 py-6 rounded-2xl">
        {' '}
        <span className="block md:inline"> 🚀🚀🚀</span> Gain{' '}
        <span className="underline"> Lifetime Access</span> to System-based
        questions
      </p>
      <div className="md:w-[60%] mx-auto">
        <p className="mb-4 border-2 border-blue-500 rounded-2xl p-4">
          💶 Price: <span className="line-through">#2000</span> <br />
          🎉 Enjoy 50% discount: New Price = <strong>#1000</strong> <br /> 📆{' '}
          <span className="text-orange-600">
            PROMO ends in 3days <FakePromoCountdown />{' '}
          </span>
        </p>
        <p className="text-center mt-10 mb-6 text-white bg-blue-500 font-semibold px-8 py-6 rounded-2xl">
          {/* <p className=" text-blue-700 font-semibold mb-4"> */}
          <span className="block md:inline">⭐⭐⭐</span> Upgrade your account
          in 3 simple steps
        </p>
        {/* </p>{' '} */}
        <p className="flex gap-4 items-center mb-4 border-2 border-blue-500 rounded-2xl p-4">
          <span className="font-black text-6xl">1</span>
          <span>
            <span className="inline-block mb-4">
              {' '}
              Transfer <strong> #1000</strong> to the account below:{' '}
            </span>{' '}
            <br />
            <span>Bank: Firstbank </span> <br /> Account Number:{' '}
            <strong> 3111320881 </strong> <br /> Account Name: Salimonu Hammed A{' '}
          </span>
        </p>
        <p className="flex gap-4 items-center mb-4 border-2 border-blue-500 rounded-2xl p-4">
          <span className="font-black text-6xl">2</span>
          <span>
            <span className="inline-block mb-4">
              Send your payment receipt to:
            </span>{' '}
            <br />
            <span className="flex gap-4 items-center">
              <a
                href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
                target="_blank"
                className="underline"
              >
                Forum:
              </a>{' '}
              <a
                href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
                target="_blank"
              >
                <BsWhatsapp size={24} color="#193cb8" />
              </a>
            </span>
            <span className="flex gap-4 items-center">
              <a
                href="https://wa.me/2348101747514"
                target="_blank"
                className="underline"
              >
                OR Admin:
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
            Access <strong>System-based Questions</strong> after 24hrs
          </span>
        </p>
      </div>
    </div>
  );
}

export default SubscriptionPage;
