import React from 'react';
import * as Icon from '@tamagui/lucide-icons';
import type { IconProps } from '@tamagui/helpers-icon';

type IconsProps = IconProps & {
  name: keyof typeof Icon;
};

const Icons = (props: IconsProps) => {
  const { name, size, ...rest } = props;

  const RenderComponent = Icon[name];

  return <RenderComponent {...rest} size={typeof size === 'number' ? size * 0.5 : size} />;
};

export default React.memo(Icons);
export type { IconsProps };
