import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Typography from '../common/Typography';
import QuestionWord from './QuestionWord';

interface QSProps {
  children: string;
  questionWord: string;
}

const QuestionSentence: FC<QSProps> = ({children, questionWord}) => {
  const modText = children.replace(/ /g, ', ');
  const parts = modText.split(',');

  return (
    <Typography h2 center>
      {parts.map(part =>
        part.match(`${questionWord}`) ? (
          <Typography>
            {' '}
            <QuestionWord qw={questionWord} />
          </Typography>
        ) : (
          part
        )
      )}
    </Typography>
  );
};

export default QuestionSentence;

const styles = StyleSheet.create({});
