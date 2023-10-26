type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  backgroundHover: string;
  backgroundFocus: string;
  colorHover: string;
  colorFocus: string;
  borderColorHover: string;
  borderColorFocus: string;
  background: string;
  backgroundPress: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorPress: string;
  colorTransparent: string;
  borderColor: string;
  borderColorPress: string;
  placeholderColor: string;
};

function t(a: any) {
  let res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    res[ks[ki]] = vs[vi];
  }
  return res;
}
const vs = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(10,10,10,0)',
  'rgba(255,255,255,0)',
  '#effefa',
  '#ddfbf3',
  '#ccf7ec',
  '#bbeee2',
  '#a6e1d3',
  '#87d0bf',
  '#51bda7',
  '#86ead4',
  '#7fe1cc',
  '#27756a',
  '#16433c',
  '#f9fefd',
  '#f9f9f8',
  '#f2f2f0',
  '#ebebe9',
  '#e4e4e2',
  '#ddddda',
  '#d3d2ce',
  '#bcbbb5',
  '#8d8d86',
  '#80807a',
  '#63635e',
  '#21201c',
  '#fdfdfc',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  '#0a1f1d',
  '#0d2927',
  '#0e322e',
  '#103b36',
  '#134842',
  '#186057',
  '#248f7d',
  '#95f3d9',
  '#49dfbe',
  '#c4f5e1',
  '#081917',
  '#1b1b1a',
  '#282826',
  '#30302e',
  '#383734',
  '#403f3c',
  '#4c4b47',
  '#62605b',
  '#6f6d66',
  '#83817a',
  '#b2b1aa',
  '#eeeeec',
  '#181816',
];

const ks = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
  'color12',
  'backgroundHover',
  'backgroundFocus',
  'colorHover',
  'colorFocus',
  'borderColorHover',
  'borderColorFocus',
  'background',
  'backgroundPress',
  'backgroundStrong',
  'backgroundTransparent',
  'color',
  'colorPress',
  'colorTransparent',
  'borderColor',
  'borderColorPress',
  'placeholderColor',
];

const n1 = t([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10],
  [11, 11],
  [12, 2],
  [13, 4],
  [14, 10],
  [15, 10],
  [16, 5],
  [17, 3],
  [18, 11],
  [19, 12],
  [20, 12],
  [21, 13],
  [22, 0],
  [23, 0],
  [24, 12],
  [25, 7],
  [26, 7],
  [27, 3],
]) as Theme;

export const light = n1 as Theme;
const n2 = t([
  [0, 14],
  [1, 15],
  [2, 16],
  [3, 17],
  [4, 18],
  [5, 19],
  [6, 20],
  [7, 21],
  [8, 22],
  [9, 23],
  [10, 24],
  [11, 24],
  [12, 16],
  [13, 18],
  [14, 22],
  [15, 22],
  [16, 19],
  [17, 17],
  [18, 23],
  [19, 24],
  [20, 24],
  [21, 25],
  [22, 14],
  [23, 14],
  [24, 24],
  [25, 19],
  [26, 19],
  [27, 17],
]) as Theme;

export const light_primary = n2 as Theme;
const n3 = t([
  [0, 26],
  [1, 27],
  [2, 28],
  [3, 29],
  [4, 30],
  [5, 31],
  [6, 32],
  [7, 33],
  [8, 34],
  [9, 35],
  [10, 36],
  [11, 36],
  [12, 28],
  [13, 30],
  [14, 34],
  [15, 34],
  [16, 31],
  [17, 29],
  [18, 35],
  [19, 36],
  [20, 36],
  [21, 37],
  [22, 26],
  [23, 26],
  [24, 36],
  [25, 31],
  [26, 31],
  [27, 29],
]) as Theme;

export const light_secondary = n3 as Theme;
const n4 = t([
  [0, 38],
  [1, 39],
  [2, 40],
  [3, 41],
  [4, 42],
  [5, 43],
  [6, 44],
  [7, 45],
  [8, 46],
  [9, 47],
  [10, 48],
  [11, 0],
  [12, 40],
  [13, 42],
  [14, 48],
  [15, 48],
  [16, 43],
  [17, 41],
  [18, 39],
  [19, 41],
  [20, 38],
  [21, 12],
  [22, 0],
  [23, 0],
  [24, 13],
  [25, 42],
  [26, 42],
  [27, 46],
]) as Theme;

export const dark = n4 as Theme;
const n5 = t([
  [0, 49],
  [1, 50],
  [2, 51],
  [3, 52],
  [4, 53],
  [5, 54],
  [6, 55],
  [7, 21],
  [8, 56],
  [9, 57],
  [10, 58],
  [11, 58],
  [12, 51],
  [13, 53],
  [14, 56],
  [15, 56],
  [16, 54],
  [17, 52],
  [18, 50],
  [19, 52],
  [20, 49],
  [21, 59],
  [22, 57],
  [23, 57],
  [24, 58],
  [25, 53],
  [26, 53],
  [27, 55],
]) as Theme;

export const dark_primary = n5 as Theme;
const n6 = t([
  [0, 60],
  [1, 61],
  [2, 62],
  [3, 63],
  [4, 64],
  [5, 65],
  [6, 66],
  [7, 67],
  [8, 68],
  [9, 69],
  [10, 70],
  [11, 70],
  [12, 62],
  [13, 64],
  [14, 68],
  [15, 68],
  [16, 65],
  [17, 63],
  [18, 61],
  [19, 63],
  [20, 60],
  [21, 71],
  [22, 69],
  [23, 69],
  [24, 70],
  [25, 64],
  [26, 64],
  [27, 66],
]) as Theme;

export const dark_secondary = n6 as Theme;
