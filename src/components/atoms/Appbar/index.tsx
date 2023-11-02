import { getSize } from '@tamagui/get-token';
import React, { ReactNode, useContext, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  SizableText,
  SizeTokens,
  View,
  createStyledContext,
  useProps,
  XStack,
  styled,
  withStaticProperties,
} from 'tamagui';

import Icons from '../Icons';

const APP_BAR_NAME = 'Appbar';

/**
 * @description Default padding horizontal for appbar
 * @description The spacing auto add for action child first action(left) and last action(right)
 */
export const DEFAULT_SPACING_HORIZONTAL = '3';

type AppbarContextType = {
  contentShouldCenter?: boolean;
  actionSize?: SizeTokens;
};

type AppbarProps = AppbarContextType;

export const AppbarContext = createStyledContext<Partial<AppbarContextType>>({
  contentShouldCenter: false,
  actionSize: '$1.5',
});

const AppbarFrame = styled(XStack, {
  name: APP_BAR_NAME,
  tag: 'button',
  context: AppbarContext,
  height: '$9',
  gap: '$1',

  variants: {
    unstyled: {
      false: {
        backgroundColor: '$background',
        justifyContent: 'space-between',
        ai: 'center',
        jc: 'center',
      },
    },
  } as const,
  defaultVariants: {
    unstyled: false,
  },
});

const AppbarComponent = AppbarFrame.styleable<AppbarProps>((props, ref) => {
  const { top, left, right } = useSafeAreaInsets();
  const { actionSize } = useContext(AppbarContext);
  const appBarProps = useProps(props);

  const actionBtnSize = appBarProps.actionSize ?? actionSize;

  const actionSpacing = getSize(actionBtnSize).val;

  const { leftActionCount, rightActionCount, newChildren } = useMemo(() => {
    let _leftActionCount = 0;
    let _rightActionCount = 0;
    let _hasAppbarContent = false;
    const childrenArr = React.Children.toArray(props.children as ReactNode).filter(
      (child) => child != null && typeof child !== 'boolean',
    ) as React.ReactElement[];

    const _newChildren = childrenArr.map((child, index) => {
      if (child.type === AppbarContent) {
        _hasAppbarContent = true;
      } else if (_hasAppbarContent) {
        _rightActionCount += 1;
        const isLastRight = index === childrenArr.length - 1;
        // Auto remove spacing for action button
        if (isLastRight) {
          return React.cloneElement(child, {
            marginRight: `$-${DEFAULT_SPACING_HORIZONTAL}`,
          });
        }
      } else {
        _leftActionCount += 1;
        const isFirstLeft = index === 0;
        // Auto remove spacing for action button
        if (isFirstLeft) {
          return React.cloneElement(child, {
            marginLeft: `$-${DEFAULT_SPACING_HORIZONTAL}`,
          });
        }
      }

      return child;
    });

    return {
      leftActionCount: _leftActionCount,
      rightActionCount: _rightActionCount,
      hasAppbarContent: _hasAppbarContent,
      newChildren: _newChildren,
    };
  }, [props.children]);

  const leftSpacing = leftActionCount === 0 ? actionSpacing * rightActionCount : 0;
  const rightSpacing = rightActionCount === 0 ? actionSpacing * leftActionCount : 0;

  const childrenFinal = (
    <>
      <View width={leftSpacing} />
      {newChildren}
      <View width={rightSpacing} />
    </>
  );

  return (
    <AppbarFrame
      {...appBarProps}
      paddingTop={top}
      paddingHorizontal={Math.max(left, right) || `$${DEFAULT_SPACING_HORIZONTAL}`}
      ref={ref}>
      {childrenFinal}
    </AppbarFrame>
  );
});

const AppbarContent = styled(SizableText, {
  name: APP_BAR_NAME, // same name as the frame so they can share a single theme
  context: AppbarContext,
  fos: '$8',
  fow: '$6',
  color: '$color',
  als: 'center',
  f: 1,
  variants: {
    contentShouldCenter: {
      true: {
        textAlign: 'center',
      },
    },
  } as const,
});

const AppbarAction = styled(Button, {
  name: APP_BAR_NAME, // same name as the frame so they can share a single theme
  context: AppbarContext,
  backgroundColor: 'transparent',
  pressStyle: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    opacity: 0.5,
  },

  variants: {
    actionSize: {
      '...size': (name) => {
        return {
          size: name,
          maxWidth: name,
        };
      },
    },
  },
});

const AppbarBackAction = styled(AppbarAction, {
  name: APP_BAR_NAME, // same name as the frame so they can share a single theme
  context: AppbarContext,
  icon: <Icons name="ChevronLeft" size="$2" />,
});

export default withStaticProperties(AppbarComponent, {
  Props: AppbarContext.Provider,
  Content: AppbarContent,
  Action: AppbarAction,
  BackAction: AppbarBackAction,
});

export type { AppbarProps };
