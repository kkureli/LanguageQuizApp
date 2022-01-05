import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../theme/constants';
import Typography from '../common/Typography';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {QuizState} from '../../models';

interface ABProps {
  quizReducer?: QuizState;
  isOption?: boolean;
}
interface ButtonProps {
  quizReducer: QuizState;
}

const Button: FC<ButtonProps> = ({
  quizReducer: {selectedAnswer, isAnswerSubmit}
}) => (
  <TouchableOpacity
    style={[
      selectedAnswer === ''
        ? styles.waitingAnswer
        : isAnswerSubmit === false
        ? styles.waitingAnswerSubmit
        : {}
    ]}
    disabled={selectedAnswer !== '' ? true : false}>
    {selectedAnswer !== '' && (
      <Typography bold style={!isAnswerSubmit && {color: COLORS.mainText}}>
        {selectedAnswer}
      </Typography>
    )}
  </TouchableOpacity>
);

const AnswerButton: FC<ABProps> = ({quizReducer}) => {
  if (
    quizReducer.selectedAnswer !== '' &&
    quizReducer.isAnswerSubmit === true
  ) {
    return (
      <LinearGradient
        style={styles.button}
        colors={
          quizReducer.isAnswerCorrect
            ? ['rgb(39,224,231)', 'rgb(71,239,227)']
            : ['rgb(255,123,136)', 'rgb(255,147,140)']
        }>
        <Button quizReducer={quizReducer} />
      </LinearGradient>
    );
  } else {
    return <Button quizReducer={quizReducer} />;
  }
};

const mapStateToProps = state => {
  return {
    quizReducer: state.quizReducer
  };
};

export default connect(mapStateToProps, null)(AnswerButton);

const styles = StyleSheet.create({
  waitingAnswer: {
    width: 100,
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'flex-end'
  },
  waitingAnswerSubmit: {
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,

    height: 40
  },
  correctAnswer: {},
  button: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,

    height: 40

    // marginHorizontal: 10
  },
  linear: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  }
});
