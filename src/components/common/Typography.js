import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Theme from '../../theme/constants';

const Typography = props => {
  const {
    // fonts & sizes
    h1,
    h2,
    h3,
    title,
    subtitle,
    caption,
    small,
    size,
    // styling
    transform,
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    error,
    warning,
    success,
    info,
    animated,
    theme,
    underline,
    style,
    children,
    ...rest
  } = props;

  const textStyles = StyleSheet.flatten([
    {
      fontWeight: Theme.WEIGHTS.regular,
      fontSize: Theme.SIZES.font,
      color: Theme.COLORS.font
      // fontFamily: Theme.FONTFAMILY.fontFamily
    },
    h1 && Theme.FONTS.h1,
    h2 && Theme.FONTS.h2,
    h3 && Theme.FONTS.h3,
    title && Theme.FONTS.title,
    subtitle && Theme.FONTS.subtitle,
    caption && Theme.FONTS.caption,
    small && Theme.FONTS.small,
    size && {fontSize: size},
    transform && {textTransform: transform},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && {fontWeight: Theme.WEIGHTS.regular},
    bold && {fontWeight: Theme.WEIGHTS.bold},
    semibold && {fontWeight: Theme.WEIGHTS.semibold},
    medium && {fontWeight: Theme.WEIGHTS.medium},
    light && {fontWeight: Theme.WEIGHTS.light},
    center && styles.center,
    right && styles.right,
    // color shortcuts
    primary && {color: Theme.COLORS.primary},
    secondary && {color: Theme.COLORS.secondary},
    tertiary && {color: Theme.COLORS.tertiary},
    black && {color: Theme.COLORS.black},
    white && {color: Theme.COLORS.white},
    gray && {color: Theme.COLORS.gray},
    error && {color: Theme.COLORS.error},
    warning && {color: Theme.COLORS.warning},
    success && {color: Theme.COLORS.success},
    info && {color: Theme.COLORS.info},
    color && {color},
    underline && {textDecoration: 'underline'},
    style // rewrite predefined styles
  ]);

  return (
    <Text {...rest} style={textStyles}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  // fonts & sizes
  h1: false,
  h2: false,
  h3: false,
  title: false,
  subtitle: false,
  caption: false,
  small: false,
  size: null,
  margin: null,
  padding: null,
  // styling
  transform: null,
  regular: false,
  bold: false,
  semibold: false,
  medium: false,
  weight: false,
  light: false,
  center: false,
  right: false,
  spacing: null, // letter-spacing
  height: null, // line-height
  // colors
  color: null,
  primary: false,
  secondary: false,
  tertiary: false,
  black: false,
  white: false,
  gray: false,
  error: false,
  warning: false,
  success: false,
  info: false,
  theme: {},
  style: {}
};
export default Typography;

const styles = StyleSheet.create({
  // positioning
  center: {textAlign: 'center'},
  right: {textAlign: 'right'}
});
