import {Dispatch} from 'react';
import {Alert} from 'react-native';
import {store} from '..';

export interface UpdateQuizAction {
  readonly type: 'SET_QUIZ_FORM';
  payload: object;
}

export type QuizAction = UpdateQuizAction;

export const onUpdateQuizForm = (payload: object) => {
  return (dispatch: Dispatch<QuizAction>) => {
    debugger;
    dispatch({
      type: 'SET_QUIZ_FORM',
      payload
    });
  };
};

export const resetQuiz = (isContinue?: boolean, qn?: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(
      onUpdateQuizForm({
        selectedAnswer: '',
        isAnswerSubmit: false,
        questionNumber: !isContinue ? 0 : qn,
        hint: {
          selectedWord: '',
          translated: ''
        },
        isAnswerCorrect: null
      })
    );
  };
};

export const onPressForHint = (hint: object, item: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(
      onUpdateQuizForm({
        hint: {
          selectedWord: item.trim(''),
          translated: hint[item.trim('')]
        }
      })
    );
  };
};

export const onCheckAnswer = (setisSubmitHidden: Function) => {
  return (dispatch: Dispatch<any>) => {
    setisSubmitHidden(false);

    dispatch(
      onUpdateQuizForm({
        isAnswerCorrect:
          store.getState().quizReducer.selectedAnswer?.toLowerCase() ===
          store
            .getState()
            .firestore.ordered.languageQuiz[
              store.getState().quizReducer.questionNumber
            ].answer.word.toLowerCase(),
        isAnswerSubmit: true
      })
    );
  };
};

export const onContinue = (setisSubmitHidden: Function) => {
  return (dispatch: Dispatch<any>) => {
    if (
      store.getState().firestore.ordered.languageQuiz?.length !==
      store.getState().quizReducer.questionNumber + 1
    ) {
      setisSubmitHidden(true);
      dispatch(
        resetQuiz(true, store.getState().quizReducer.questionNumber + 1)
      );
    } else {
      Alert.alert('Quiz is finished', 'Would u like to play again?', [
        {
          text: 'Cancel',

          style: 'cancel'
        },
        {
          text: 'Yes!',
          onPress: () => dispatch(resetQuiz())
        }
      ]);
    }
  };
};
