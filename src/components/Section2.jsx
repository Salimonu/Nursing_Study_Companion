import { Link } from 'react-router';
import ScoreBoard from './ScoreBoard';
import { useQuiz } from '../hooks/useQuiz';
import Restart from './Restart';

function QuizScreen() {
  const { section2, dispatch } = useQuiz();

  const numQuestions = section2.questions.length;
  const totalPoints = section2.questions.reduce(
    (prev, question) => prev + question.points,
    0
  );

  // const questions = data.questions2;

  // const [index, setIndex] = useState(0);
  // const [points, setPoints] = useState(0);
  // const [answer, setAnswer] = useState(null);
  // const [addedPoints, setAddedPoints] = useState(false);

  // const numQuestions = questions?.length;
  // const totalPoints = questions?.reduce(
  //   (prev, question) => prev + question.points,
  //   0
  // );

  // function handleNext() {
  //   setIndex(index => index + 1);
  //   setAnswer(null);
  //   setAddedPoints(false);
  // }

  // function handleAnswer(selectedIndex) {
  //   setAnswer(selectedIndex);
  //   const question = questions[index];
  //   const correctAnswer = selectedIndex === question.correctOption;
  //   if (correctAnswer && !addedPoints) {
  //     setPoints(points => points + question.points);
  //     setAddedPoints(true);
  //   }
  // }

  // function handleShowPoints() {
  //   setIndex(index => index + numQuestions);
  // }

  return (
    <>
      <h2 className="text-center text-4xl py-4 text-blue-800 font-bold uppercase">
        Anatomy and Physiology
      </h2>
      <div className="flex justify-between mb-10">
        <div className=" text-2xl font-semibold">
          <Link to="/">
            <span className="hover:underline">Home-</span>
          </Link>
          <Link to="/sections">
            <span className="hover:underline">Sections-</span>

            {/* {' '}
            <button className="mb-4 text-2xl py-1 px-2 rounded-lg bg-blue-300 font-semibold text-white cursor-pointer hover:bg-blue-600">
              Home{' '}
            </button>{' '} */}
          </Link>
          <span className="mb-4 text-2xl font-semibold ">Section 2</span>
        </div>
        {section2.index ? (
          <button
            // onClick={handleShowPoints}
            onClick={() =>
              dispatch({ type: 'show_points', section: 'section2' })
            }
            className="border-1 px-4 py-2 text-2xl rounded-4xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
          >
            My Score &rarr;{' '}
          </button>
        ) : (
          ''
        )}
      </div>

      {section2.index > numQuestions - 1 ? (
        <ScoreBoard points={section2.points} totalPoints={totalPoints} />
      ) : (
        <div>
          <div className="lg:flex justify-between  gap-8">
            <div className="flex-1 mb-4">
              {section2.index <= numQuestions - 1 && (
                <p className="text-2xl mb-2">
                  Question <strong>{section2.index + 1}</strong> of{' '}
                  {numQuestions}
                </p>
              )}
              <p className=" text-2xl mb-2 font-semibold">
                {section2.questions[section2.index]?.question}
              </p>
              {section2.questions[section2.index]?.options.map((option, i) => (
                <button
                  key={option}
                  // onClick={() => handleAnswer(i)}
                  onClick={() =>
                    dispatch({
                      type: 'new_answer',
                      section: 'section2',
                      payload: {
                        selectedIndex: i,
                      },
                    })
                  }
                  className={`${
                    i === section2.answer
                      ? 'bg-blue-500 border-blue-500 text-white font-bold'
                      : ''
                  } text-left w-[55%] text-xl border-1 pl-4 pr-4 mb-2 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200`}
                >
                  {option}
                </button>
              ))}{' '}
            </div>
          </div>
          <div className="flex justify-between">
            {section2.answer !== null ? (
              <p className="mt-4">
                {section2.index < numQuestions - 1 ? (
                  <button
                    // onClick={handleNext}
                    onClick={() =>
                      dispatch({ type: 'next_question', section: 'section2' })
                    }
                    className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200"
                  >
                    Next &rarr;{' '}
                  </button>
                ) : (
                  <button
                    // onClick={handleNext}
                    onClick={() =>
                      dispatch({ type: 'next_question', section: 'section2' })
                    }
                    className="border-1 px-4 py-1 text-2xl rounded-4xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
                  >
                    My Score &rarr;{' '}
                  </button>
                )}
              </p>
            ) : (
              ''
            )}

            <div></div>
            <Restart />
          </div>
        </div>
      )}
    </>
  );
}

export default QuizScreen;
