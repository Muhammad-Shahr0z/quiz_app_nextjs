// app/quiz/easy/page.tsx
"use client";
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { quizAtom } from '../../../../State';
import { easyQuestions } from '../../../../data/easy';


export default function EasyQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizState, setQuizState] = useAtom(quizAtom);

  const handleAnswer = (answer: number) => {
    const updatedEasyAnswers = [...quizState.easyAnswers];
    updatedEasyAnswers[currentQuestionIndex] = answer;
    setQuizState({ ...quizState, easyAnswers: updatedEasyAnswers });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6 bg-white shadow-2xl rounded-lg animate-slideIn">
      <h2 className="text-2xl font-semibold text-center text-purple-600">Easy Quiz</h2>
      {currentQuestionIndex < easyQuestions.length ? (
        <div className="space-y-4">
          <p className="text-lg font-medium text-gray-700">
            {easyQuestions[currentQuestionIndex].question}
          </p>
          {easyQuestions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition transform hover:scale-105 duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <Link href="/quiz/result">
            <button className="flex items-center justify-center bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">
              View Result
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
