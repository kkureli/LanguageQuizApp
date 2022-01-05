import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Typography from '../common/Typography';

interface TitleProps {
  children: string;
}

const Title: FC<TitleProps> = ({children}) => {
  return (
    <Typography style={styles.title} subtitle center>
      {children}
    </Typography>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {marginTop: 10}
});
