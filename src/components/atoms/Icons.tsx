import svgSource, { SVGSourceKey } from '@assets/svg';
import type { IconProps } from '@tamagui/helpers-icon';
import * as Icon from '@tamagui/lucide-icons';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { SvgProps } from 'react-native-svg';
import { Token, getToken } from 'tamagui';

type IconsProps = SvgProps &
  IconProps & {
    /**
     * @description the name's custom svg(SVGSourceKey) is priority render
     */
    name: keyof typeof Icon | SVGSourceKey;

    /**
     * @description Custom Svg Icon
     */
    full?: boolean;
  };

const Icons = (props: IconsProps) => {
  const { name, size, ...rest } = props;

  const RenderLucideIcon = Icon[name as keyof typeof Icon];
  const RenderCustomSvgIcon = svgSource[name as SVGSourceKey];

  if (RenderCustomSvgIcon) {
    const options = props;
    if (props.full) {
      options.height = '100%';
      options.width = ms(100);
    } else {
      const _size = typeof size === 'string' ? getToken(size as Token, 'size') : size;

      options.height = _size;
      options.width = _size;
    }
    return <RenderCustomSvgIcon {...options} customFillColor={(props.color as string) || '#000'} />;
  } else if (RenderLucideIcon) {
    return <RenderLucideIcon {...rest} size={typeof size === 'number' ? size * 0.5 : size} />;
  }

  return null;
};

export default React.memo(Icons);
export type { IconsProps };
