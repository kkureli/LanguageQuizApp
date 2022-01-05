import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Typography from '../common/Typography';

interface QWProps {
  qw: string;
}

const QuestionWord: FC<QWProps> = ({qw}) => {
  return (
    <Typography
      bold
      h2
      center
      style={{
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#fff'
      }}>
      {qw}
    </Typography>
  );
};

export default QuestionWord;

const styles = StyleSheet.create({});
