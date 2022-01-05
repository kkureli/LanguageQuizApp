import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  // default font color
  font: '#ffffff',

  // base colors
  primary: '#376BFB',
  secondary: '#A3A1F7',
  tertiary: '#FFE358',
  orange: '#F5953C',
  lightGray: '#E5DECE',
  bg: 'rgb(62,109,128)',

  mainText: 'rgb(56,81,103)',

  // non-colors
  black: '#000020',
  white: '#FFFFFF',

  // color variations
  gray: '#535453',
  error: '#DC3545',
  warning: '#FFE358',
  success: '#4CD964',
  info: '#4DA1FF'
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 4,
  padding: 24,
  cardHeight: 120,

  // font sizes
  h1: 34,
  h2: 24,
  h3: 20,
  title: 18,
  subtitle: 14,
  caption: 12,
  small: 10,

  // app dimensions
  width,
  height,

  cardBorderRadius: 7
};

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84
  // elevation: 0,
};

export const FONTS = {
  h1: {fontSize: SIZES.h1, letterSpacing: 0.15},
  h2: {fontSize: SIZES.h2, letterSpacing: 0},
  h3: {fontSize: SIZES.h3, letterSpacing: 0.15},
  title: {fontSize: SIZES.title, letterSpacing: 0.15},
  subtitle: {fontSize: SIZES.subtitle},
  caption: {fontSize: SIZES.caption, letterSpacing: 0.4},
  small: {fontSize: SIZES.small, letterSpacing: 1.5}
};

export const WEIGHTS = {
  regular: 'normal',
  bold: 'bold',
  semibold: '500',
  medium: '400',
  light: '300'
};

export const FONTFAMILY = {
  // fontFamily: 'Roboto'
};

export const hitSlop = {top: 20, left: 20, bottom: 20, right: 20};

export default {COLORS, SIZES, FONTS, WEIGHTS, FONTFAMILY, SHADOW};
