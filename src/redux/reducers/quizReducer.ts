import {QuizState} from '../../models';
import {QuizAction} from '../actions/quizActions';

const initialState: QuizState = {
  selectedAnswer: '',
  isAnswerSubmit: false,
  questionNumber: 0,
  hint: {
    selectedWord: '',
    translated: ''
  },
  isAnswerCorrect: null
};

const QuizReducer = (state: QuizState = initialState, action: QuizAction) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_QUIZ_FORM':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export {QuizReducer};
