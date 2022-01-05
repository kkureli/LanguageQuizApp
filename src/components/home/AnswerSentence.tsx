import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {QuizState} from '../../models';
import {onPressForHint} from '../../redux/actions/quizActions';
import Typography from '../common/Typography';
import AnswerWord from './AnswerWord';
import HintBubble from './HintBubble';

interface ASProps {
  children: string;
  answerState: QuizState;
  answerWord: string;
  translatedWord: string;
  onPressForHint: Function;
  hint: object;
}

const AnswerSentence: FC<ASProps> = ({
  children,
  answerWord,
  answerState,
  onPressForHint,
  translatedWord,
  hint
}) => {
  const modText = children.replace(/ /g, ', ');
  const parts = modText.split(',');

  return (
    <View style={styles.container}>
      {parts.map((part, index) =>
        !part.match(`${answerWord}`) ? (
          <View>
            {answerState.hint.selectedWord === part.trim('') && (
              <HintBubble translatedWord={translatedWord} />
            )}
            <TouchableOpacity
              onPress={() => onPressForHint(hint, part)}
              key={index}
              style={styles.hintWordButton}>
              <Typography title style={styles.hintWord}>
                {part}
              </Typography>
              <View style={styles.dottedUnderline}>
                {Array.from(Array(part.length * 2)).map((l, i) => (
                  <View key={i}>
                    <Typography title bold>
                      .
                    </Typography>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <AnswerWord />
        )
      )}
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onPressForHint: (hint: object, item: string) =>
      dispatch(onPressForHint(hint, item))
  };
};

export default connect(null, mapDispatchToProps)(AnswerSentence);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    flexDirection: 'row'
  },
  hintWord: {
    top: 10
  },
  hintWordButton: {
    // alignItems: 'center',
    marginHorizontal: 10
  },
  dottedUnderline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
