import {ms, vs} from 'react-native-size-matters';
/* eslint-disable @typescript-eslint/no-shadow */
import {createTokens} from 'tamagui';
import {color} from './color';

export const size = {
  $0: 0,

  // Width
  '$0.25': ms(2),
  '$0.5': ms(4),
  '$0.75': ms(8),
  $1: ms(20),
  '$1.5': ms(24),
  $2: ms(28),
  '$2.5': ms(32),
  $3: ms(36),
  '$3.5': ms(40),
  $4: ms(44),
  $true: ms(44),
  '$4.5': ms(48),
  $5: ms(52),
  $6: ms(64),
  $7: ms(74),
  $8: ms(84),
  $9: ms(94),
  $10: ms(104),
  $11: ms(124),
  $12: ms(144),
  $13: ms(164),
  $14: ms(184),
  $15: ms(204),
  $16: ms(224),
  $17: ms(224),
  $18: ms(244),
  $19: ms(264),
  $20: ms(284),

  // Height
  '$h0.25': vs(2),
  '$h0.5': vs(4),
  '$h0.75': vs(8),
  $h1: vs(20),
  '$h1.5': vs(24),
  $h2: vs(28),
  '$h2.5': vs(32),
  $h3: vs(36),
  '$h3.5': vs(40),
  $h4: vs(44),
  $htrue: vs(44),
  '$h4.5': vs(48),
  $h5: vs(52),
  $h6: vs(64),
  $h7: vs(74),
  $h8: vs(84),
  $h9: vs(94),
  $h10: vs(104),
  $h11: vs(124),
  $h12: vs(144),
  $h13: vs(164),
  $h14: vs(184),
  $h15: vs(204),
  $h16: vs(224),
  $h17: vs(224),
  $h18: vs(244),
  $h19: vs(264),
  $h20: vs(284),
};

type SizeKeysIn = keyof typeof size;
type Sizes = {
  [Key in SizeKeysIn extends `$${infer Key}` ? Key : SizeKeysIn]: number;
};
type SizeKeys = `${keyof Sizes extends `${infer K}` ? K : never}`;

const spaceBySize: {[k in number]: number} = {
  0: 0,
  2: 0.5,
  4: 1,
  8: 1.5,
};

// a bit odd but keeping backward compat for values >8 while fixing below
function sizeToSpace(v: number) {
  if (spaceBySize[v]) {
    return spaceBySize[v];
  }
  if (v <= 16) {
    return Math.round(v * 0.333);
  }
  return Math.floor(v * 0.7 - 12);
}

const spaces = Object.entries(size).map(([k, v]) => {
  return [k, sizeToSpace(v)] as const;
});

const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);

type SizeKeysWithNegatives =
  | Exclude<`-${SizeKeys extends `$${infer Key}` ? Key : SizeKeys}`, '-0'>
  | SizeKeys;

export const space: {
  [Key in SizeKeysWithNegatives]: Key extends keyof Sizes ? Sizes[Key] : number;
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
} as any;

export const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50,
};

export const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};

// https://tamagui.dev/docs/core/tokens#using-tokens-with-components
export const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
});
