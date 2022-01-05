export interface QuizState {
  selectedAnswer: string | null;
  questionNumber: number;
  hint: {
    selectedWord: string;
    translated: string;
  };
  isAnswerSubmit: boolean;
  isAnswerCorrect: boolean | null;
}

export interface LanguageQuiz {
  id: string;
  question: {
    sentence: string;
    word: string;
  };
  answer: {
    sentence: string;
    word: string;
  };
  options: Array<string>;
  hint: object;
}
