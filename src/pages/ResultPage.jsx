import { Link, useSearchParams } from 'react-router-dom';
import { useQuiz } from '@/hooks/useQuiz';
import Button from '@/ui/Button';
import AnswersList from '@/ui/AnswersList';

import { useState } from 'react';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';

function ResultPage() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section');
  // const { dispatch, section1, section2, section3 } = useQuiz();
  const {
    dispatch,
    section1,
    section2,
    section3,
    cardiovascular,
    lymphatic,
    nervous,
    endocrine,
    respiratory,
    digestive,
    urinary,
    musculoskeletal,
    reproductive,
  } = useQuiz();

  let questions = [];
  let correctOptions = [];

  // const sectionState =
  //   section === 'section1'
  //     ? section1
  //     : section === 'section2'
  //     ? section2
  //     : section3;

  const sectionState =
    section === 'section1'
      ? section1
      : section === 'section2'
      ? section2
      : section === 'section3'
      ? section3
      : section === 'cardiovascular'
      ? cardiovascular
      : section === 'lymphatic'
      ? lymphatic
      : section === 'nervous'
      ? nervous
      : section === 'endocrine'
      ? endocrine
      : section === 'respiratory'
      ? respiratory
      : section === 'digestive'
      ? digestive
      : section === 'urinary'
      ? urinary
      : section === 'musculoskeletal'
      ? musculoskeletal
      : reproductive;

  const { questions: questionsObjs, isCorrect, userAnswer } = sectionState;

  questionsObjs.map((questionObj, i) => {
    questions[i] = questionObj.question;
    correctOptions[i] = questionObj.options.at(questionObj.correct_option);
  });

  //  to correct NAN that occurs when divided by 0

  const totalQuestions = Math.max(questionsObjs.length, 1);
  const correcAnswers = isCorrect.filter(Boolean).length;
  const score = (correcAnswers / totalQuestions) * 100;

  return (
    <div className="px-8 md:w-[60%] mx-auto">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">
        🎉 Quiz Completed!{' '}
      </h2>

      <p className="text-center my-6 text-3xl font-semibold uppercase border-2 border-dotted border-blue-700 text-blue-700 py-2 px-4 rounded-2xl">
        {section}
      </p>
      <div className="grid grid-cols-[1fr_auto] justify-items-start gap-x-10 gap-y-4 text-2xl font-semibold mb-8">
        <span>Total Questions: </span>{' '}
        {/* to correct NAN that when divided by 0 */}
        <span>{totalQuestions > 1 ? totalQuestions : 0}</span>
        <span>Correct Answers: </span> <span>{correcAnswers}</span>{' '}
        <span>Score:</span>{' '}
        <span className="bg-blue-600 text-white py-1 px-2 rounded-xl font-bold">
          {score}%
        </span>
      </div>

      <Link
        to={`/profile/quiz?section=${section}`}
        onClick={() => {
          dispatch({ type: 'RESTART', section });
        }}
      >
        <Button style="text-center text-2xl py-2 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-semibold cursor-pointer">
          Retry Quiz
        </Button>
      </Link>
      <Button
        style="text-center text-2xl py-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold cursor-pointer mt-4"
        onClick={() => setShowAnswers(ans => !ans)}
      >
        Check Answers
      </Button>
      {showAnswers && (
        <AnswersList
          questions={questions}
          correctOptions={correctOptions}
          userAnswer={userAnswer}
          isCorrect={isCorrect}
        />
      )}

      {/* links to join community */}
      <div className="mx-auto flex items-center justify-center gap-4 py-4 w-[90%] ">
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
  );
}

export default ResultPage;
