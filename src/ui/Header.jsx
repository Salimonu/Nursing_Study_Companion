import { Container } from '@chakra-ui/react';
import Button from './Button';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';

function Header() {
  return (
    <>
      <div className="flex justify-between items-end px-4">
        <div className="py-3 flex justify-start items-end">
          <span className="font-bold text-6xl text-blue-800">Q</span>
          <span className=" text-4xl font-bold text-blue-800">uiz4Nurses</span>
        </div>
        <div className="flex justify-between items-center gap-2 py-3">
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
    </>
  );
}

export default Header;
