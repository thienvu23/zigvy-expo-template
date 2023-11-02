import ChevronLeftThin from './chevron-left-thin.svg';
import FaceId from './face-id.svg';
import ZigvyLogo from './zigvy-logo.svg';

const svgSource = {
  ZigvyLogo,
  FaceId,
  ChevronLeftThin,
};

export type SVGSourceKey = keyof typeof svgSource;

export default svgSource;
