// app/quiz/result/page.tsx
"use client";
import Link from 'next/link';
import { useAtom } from 'jotai';

import { FaRedo } from 'react-icons/fa';
import { easyQuestions } from '../../../../data/easy';
import { quizAtom } from '../../../../State';
import { hardQuestions } from '../../../../data/hard';

export default function ResultPage() {
  const [quizState] = useAtom(quizAtom);

  // Determine which quiz was taken (assumes one or the other)
  const isEasyQuiz = quizState.easyAnswers.length > 0;
  const questions = isEasyQuiz ? easyQuestions : hardQuestions;
  const answers = isEasyQuiz ? quizState.easyAnswers : quizState.hardAnswers;

  const score = questions.reduce((total, question, idx) => {
    return total + (answers[idx] === question.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6 bg-white shadow-2xl rounded-lg animate-fadeIn">
      <h2 className="text-2xl font-semibold text-center text-green-600">Your Result</h2>
      <p className="text-lg text-center text-gray-700">
        You scored: {score} out of {questions.length}
      </p>
      <div className="text-center mt-4">
        <Link href="/">
          <button className="flex items-center justify-center bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
            Restart Quiz
            <FaRedo className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}
