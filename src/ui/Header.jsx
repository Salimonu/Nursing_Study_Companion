import { Container } from '@chakra-ui/react';

function Header() {
  return (
    // <Container mb="2rem">

    <div className="mx-auto w-[60%]">
      <h1 className="flex justify-between text-center text-4xl pt-4 mb-10 text-blue-800 uppercase">
        <span className="font-bold">Quiz hub</span>
        <span>For Nurses</span>
      </h1>
    </div>
    // </Container>
  );
}

export default Header;
