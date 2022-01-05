import React, {FC, useState} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import BG from '../../components/common/BG';
import Loading from '../../components/common/Loading';
import AnswerSentence from '../../components/home/AnswerSentence';
import Options from '../../components/home/Options';
import QuestionSentence from '../../components/home/QuestionSentence';
import SubmitButton from '../../components/home/SubmitButton';
import Title from '../../components/home/Title';
import {LanguageQuiz, QuizState} from '../../models';

interface HomeScreenProps {
  languageQuiz: LanguageQuiz;
  quizReducer: QuizState;
}

const HomeScreen: FC<HomeScreenProps> = ({languageQuiz, quizReducer}) => {
  const currentQA =
    languageQuiz &&
    languageQuiz.length > 0 &&
    languageQuiz[quizReducer.questionNumber];

  const [isSubmitHidden, setisSubmitHidden] = useState(false);
  const {answer, hint, options, question} = currentQA || {};

  if (currentQA) {
    return (
      <>
        <BG>
          <Title>Fill in the missing word</Title>
          <QuestionSentence questionWord={question.word}>
            {question.sentence}
          </QuestionSentence>
          <AnswerSentence
            hint={hint}
            translatedWord={quizReducer.hint.translated}
            answerWord={answer.word}
            answerState={quizReducer}>
            {answer.sentence}
          </AnswerSentence>
          <Options options={options} />
        </BG>
        <SubmitButton
          setisSubmitHidden={setisSubmitHidden}
          answerWord={answer.word}
          answerState={quizReducer}
          submitHidden={isSubmitHidden}
        />
      </>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = state => {
  return {
    languageQuiz: state?.firestore?.ordered?.languageQuiz,
    quizReducer: state.quizReducer
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect(props => {
    return [
      {
        collection: 'languageQuiz'
      }
    ];
  })
)(HomeScreen);
