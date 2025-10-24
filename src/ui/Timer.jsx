import Button from './Button';

function Timer() {
  const btnStyleFill =
    'border-1 px-4 py-2 text-2xl rounded-3xl text-white font-bold bg-blue-500 border-blue-500';
  return <Button style={btnStyleFill}>05:00</Button>;
}

export default Timer;
