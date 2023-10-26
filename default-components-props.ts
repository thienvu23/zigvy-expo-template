import { Text, TextInput, TextProps } from 'react-native';

type DefaultProps = {
  defaultProps: TextProps | null;
};
const RNText = Text as unknown as DefaultProps;
const RNTTextInput = TextInput as unknown as DefaultProps;

if (RNText.defaultProps == null) RNText.defaultProps = {};
if (RNTTextInput.defaultProps == null) RNTTextInput.defaultProps = {};

RNText.defaultProps.allowFontScaling = false;
RNTTextInput.defaultProps.allowFontScaling = false;
