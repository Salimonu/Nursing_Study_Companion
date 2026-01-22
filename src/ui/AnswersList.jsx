{
  /* <div className="min-h-90 flex flex-col justify-center">
      <div className="overflow-x-auto mt-2 p-6">large content</div> 
    </div>

the large content is expanding beyond the container */
}

function AnswersList({
  questions,
  correctOptions,
  userAnswer,
  isCorrect,
  rationales,
}) {
  return (
    <div className="overflow-auto mt-2 p-6">
      {/* questions */}
      <table>
        <thead>
          <tr className="text-xl">
            <th className="text-left">#</th>
            <th>Questions</th>
            <th className="text-blue-700 text-left">Correct answers</th>
            <th className="text-blue-700 text-left">Rationales</th>
            <th className="text-orange-700 text-left">Your answers</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index} className="text-lg">
              <td className="pr-4">{index + 1}</td>
              <td className="pr-6 py-4 md:py-1">{question}</td>
              <td className="pr-6">{correctOptions[index]}</td>
              <td className="pr-6">
                {rationales[index] ? rationales[index] : 'none'}
              </td>
              <td className="pr-6">
                {userAnswer[index] ? userAnswer[index] : 'none'}
              </td>
              <td
                className={
                  isCorrect[index]
                    ? 'text-green-600 font-semibold'
                    : 'text-orange-600 font-semibold'
                }
              >
                {isCorrect[index] ? 'Correct' : 'Wrong'}
              </td>
              {/* <td>{isCorrect[index]}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnswersList;
AnswersList;
