import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
  return (
    <div className="bg-blue-200 p-4 mt-8 ">
      <div className="py-3 flex justify-center items-end">
        <span className="font-bold text-6xl text-blue-800">Q</span>
        <span className=" text-4xl font-bold text-blue-800">uiz4Nurses</span>
      </div>
      <div className="mx-auto flex items-center justify-center gap-4 py-4 w-[60%] ">
        <a
          href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
          target="_blank"
        >
          <BsWhatsapp size={30} color="#193cb8" />
        </a>

        <a href="https://www.facebook.com/share/18vYDY7qrE/" target="_blank">
          <BsFacebook size={30} color="#193cb8" />
        </a>
      </div>
      <p className="text-lg text-center mt-4">
        &copy; Copyright @ 2025{' '}
        <a
          className="underline font-semibold"
          href="https://qmedwebsolutions.netlify.app/"
          target="_blank"
        >
          Qmed Tech Solutions{' '}
        </a>
      </p>
    </div>
  );
}

export default Footer;
