import React, {FC} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Typography from '../common/Typography';

interface HintBubbleProps {
  translatedWord: string | undefined;
}

const HintBubble: FC<HintBubbleProps> = ({translatedWord}) => {
  return (
    <View style={styles.bubble}>
      <Image
        style={{width: 80, height: 80, resizeMode: 'contain'}}
        source={require('../../assets/images/hintbubble.png')}
      />
      <View style={styles.bubbleText}>
        <Typography>{translatedWord}</Typography>
      </View>
      {/* <Typography>{translatedWord}</Typography> */}
    </View>
  );
};

export default HintBubble;

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 50,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubbleText: {
    position: 'absolute',
    bottom: 50
  }
});
