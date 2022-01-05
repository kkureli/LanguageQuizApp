import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {QuizState} from '../../models';
import {onUpdateQuizForm} from '../../redux/actions/quizActions';
import OptionButton from './OptionButton';

interface OptionsProps {
  options: string[];
  onUpdateQuizForm: Function;
  quizReducer: QuizState;
}

const Options: FC<OptionsProps> = ({
  options,
  onUpdateQuizForm,
  quizReducer
}) => {
  return (
    <FlatList
      contentContainerStyle={styles.optionsContainer}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      data={options}
      renderItem={({item, index}) => (
        <OptionButton
          onPress={() => onUpdateQuizForm({selectedAnswer: item})}
          answerState={quizReducer}
          size={index === 0 || index === 1 ? 'small' : 'large'}
          optionWord={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  }
});

const mapStateToProps = state => {
  return {
    quizReducer: state.quizReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateQuizForm: data => dispatch(onUpdateQuizForm(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
