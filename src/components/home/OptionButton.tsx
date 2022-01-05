import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {QuizState} from '../../models';
import {COLORS} from '../../theme/constants';
import Typography from '../common/Typography';

interface OptionsButtonProps {
  answerState: QuizState;
  optionWord: string;
  size: 'small' | 'large';
  onPress: Function;
}

const OptionButton: FC<OptionsButtonProps> = ({
  answerState,
  optionWord,
  size,
  onPress
}) => {
  console.log(
    answerState.selectedAnswer === optionWord || answerState.isAnswerSubmit,
    'aa'
  );
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        answerState.selectedAnswer === optionWord || answerState.isAnswerSubmit
          ? styles.isSelected
          : styles.enabled,
        // {

        // },

        {
          width: size === 'small' ? 100 : 130
        }
      ]}>
      {
        <Typography bold color={COLORS.mainText}>
          {answerState.selectedAnswer !== optionWord && optionWord}
        </Typography>
      }
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,

    height: 40,
    marginVertical: 5,
    marginHorizontal: 5
  },
  isSelected: {
    backgroundColor: 'rgb(103,146,164)'
  },
  enabled: {opacity: 1}
});
