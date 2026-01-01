import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import logo from '/quiz4nurses-logo.png';

function Footer() {
  return (
    <div className="bg-blue-200 p-4 mt-8">
      <div className="md:flex">
        <Link to="/">
          <img src={logo} alt="quiz4nurses logo" className="mx-auto w-60" />
        </Link>

        <div className="mx-auto flex items-center justify-center gap-4 pb-4 w-[90%] ">
          <p className="text-3xl font-semibold">
            Join Our{' '}
            <a
              href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
              target="_blank"
              className="underline"
            >
              Community:
            </a>
          </p>
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
