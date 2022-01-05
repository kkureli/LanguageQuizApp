import React, {FC} from 'react';
import {
  Dimensions,
  MaskedViewIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import FlagIcon from '../../assets/icons/FlagIcon';
import {QuizState} from '../../models';
import {onCheckAnswer, onContinue} from '../../redux/actions/quizActions';
import Typography from '../common/Typography';
const {width, height} = Dimensions.get('screen');

const GradientText = props => (
  <MaskedViewIOS maskElement={<Text {...props} />}>
    <LinearGradient
      colors={
        props.isSuceess
          ? ['rgb(38,220,231)', 'rgb(72,233,232)']
          : ['rgb(253,124,138)', 'rgb(253,147,142)']
      }
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text {...props} style={[props.style, {opacity: 0}]} />
    </LinearGradient>
  </MaskedViewIOS>
);

interface SubmitButtonProps {
  answerState: QuizState;
  submitHidden: boolean;
  answerWord: string;
  onCheckAnswer: Function;
  onContinue: Function;
  setisSubmitHidden: Function;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  answerState: {isAnswerCorrect},
  answerState,
  onContinue,
  answerWord,
  onCheckAnswer,
  submitHidden,
  setisSubmitHidden
}) => {
  if (answerState.selectedAnswer === '' || !answerState.isAnswerSubmit) {
    return (
      <TouchableOpacity
        disabled={!answerState.selectedAnswer}
        onPress={() => onCheckAnswer(setisSubmitHidden)}
        style={[
          styles.buttonTextContainer,
          styles.waitingSubmit,
          {
            backgroundColor:
              answerState.selectedAnswer === ''
                ? 'rgb(101,146,165)'
                : 'rgb(42,228,234)'
          }
        ]}>
        <Typography
          center
          bold
          white
          isSuceess={isAnswerCorrect}
          style={{fontSize: 24}}>
          {answerState.selectedAnswer ? 'CHECK ANSWER' : 'CONTINUE'}
        </Typography>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          opacity: !submitHidden ? 1 : 0
        }}>
        <LinearGradient
          style={styles.submit}
          colors={
            isAnswerCorrect
              ? ['rgb(38,220,231)', 'rgb(72,233,232)']
              : ['rgb(253,124,138)', 'rgb(253,147,142)']
          }>
          <View style={styles.msgFlagRow}>
            {isAnswerCorrect ? (
              <Typography bold>Great Job!</Typography>
            ) : (
              <Typography>Answer: {answerWord}</Typography>
            )}
            <FlagIcon color="white" />
          </View>

          <TouchableOpacity
            onPress={() => onContinue(setisSubmitHidden)}
            style={styles.buttonTextContainer}>
            <GradientText isSuceess={isAnswerCorrect} style={{fontSize: 30}}>
              CONTINUE
            </GradientText>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onContinue: (setisSubmitHidden: Function) =>
      dispatch(onContinue(setisSubmitHidden)),
    onCheckAnswer: (setisSubmitHidden: Function) =>
      dispatch(onCheckAnswer(setisSubmitHidden))
  };
};

export default connect(null, mapDispatchToProps)(SubmitButton);

const styles = StyleSheet.create({
  submit: {
    width: width,
    height: height / 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  waitingSubmit: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center'
  },
  buttonTextContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // width: width / 1.5,
    height: 60,
    borderRadius: 25,
    paddingHorizontal: 100
  },
  msgFlagRow: {
    alignSelf: 'flex-start',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%'
  }
});
