import React, {FC, ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/constants';

interface BGProps {
  children?: ReactNode;
  containerStyle?: ViewStyle;
}

const BG: FC<BGProps> = ({children, containerStyle}) => {
  return (
    <SafeAreaView style={[styles.container, {...containerStyle}]}>
      <ScrollView style={{flex: 1}}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default BG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  }
});
