// atoms/quizAtom.ts
import { atom } from 'jotai';

export type QuizState = {
  easyAnswers: number[];
  hardAnswers: number[];
};

export const quizAtom = atom<QuizState>({
  easyAnswers: [],
  hardAnswers: [],
});
