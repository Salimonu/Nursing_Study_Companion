// import { useEffect } from 'react';
// import { useQuiz } from '../hooks/useQuiz';

// function Timer() {
//   const { mins, secs, dispatch } = useQuiz();

//   useEffect(
//     function () {
//       const id = setInterval(() => {
//         dispatch({ type: 'tick' });
//       }, 1000);

//       return () => clearInterval(id);
//     },
//     [dispatch]
//   );

//   return (
//     <div className="timer">
//       {mins < 10 && '0'}
//       {mins}: {secs < 10 && '0'}
//       {secs}
//     </div>
//   );
// }

// export default Timer;
