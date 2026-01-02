import FakePromoCountdown from '@/ui/FakePromoCountdown';
import { BsWhatsapp } from 'react-icons/bs';

function SubscriptionPage() {
  return (
    <div className="min-h-90 p-10 text-2xl">
      <p className="md:w-[60%] mx-auto text-center mb-8 text-white bg-blue-500 font-semibold px-6 py-6 rounded-2xl">
        {' '}
        <span className="block md:inline"> 🚀🚀🚀</span> Gain{' '}
        <span className="underline"> Lifetime Access</span> to ALL System-based
        questions
      </p>
      <div className="md:w-[60%] mx-auto">
        <div className="mb-4 border-2 border-blue-500 rounded-2xl p-4">
          <p className="flex gap-2 mb-2">
            <span>💶</span>{' '}
            <span>
              {' '}
              Price: <span className="line-through">#2000</span>
            </span>
          </p>
          <p className="flex gap-2 mb-2">
            <span>🎉 </span>{' '}
            <span>
              Enjoy 50% discount: New Price = <strong>#1000</strong>
            </span>
          </p>
          <p className="flex gap-2 mb-2">
            📆{' '}
            <span className="text-orange-600">
              PROMO ends in <strong> 3days</strong>
            </span>
          </p>
          <FakePromoCountdown />{' '}
        </div>
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
              Transfer <strong> #1000</strong> to the account below:{' '}
            </p>{' '}
            <p className=" mb-2">
              Bank: <strong>Firstbank</strong>{' '}
            </p>{' '}
            <p className=" mb-2">
              Account Number: <strong> 3111320881 </strong>{' '}
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
            <span className="flex mb-2 gap-4 items-center">
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
            Access <strong>ALL System-based Questions</strong> after 24hrs
          </span>
        </p>
      </div>
    </div>
  );
}

export default SubscriptionPage;
