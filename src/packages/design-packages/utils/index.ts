import { CSSProperties } from 'react';
import { colors } from '../colors';

interface InteractiveStyleOptions {
  horizontalOffset?: number;
}

type InteractiveIntensity = 'default' | 'weak' | 'strong' | 'none';
interface ClickableIntensityStyle {
  active: number;
  hover: number;
}
interface ClickableOption extends InteractiveStyleOptions {
  initialTransform?: CSSProperties['transform'];
  activeTransform?: CSSProperties['transform'];
}

const defaultIntensities: Record<
  InteractiveIntensity,
  { hover: number; active: number }
> = {
  default: {
    hover: 0.04,
    active: 0.08,
  },
  weak: {
    hover: 0.02,
    active: 0.04,
  },
  strong: {
    hover: 0.1,
    active: 0.2,
  },
  none: {
    hover: 0,
    active: 0,
  },
};

const utils = {
  gradientText: (value?: string) => ({
    backgroundImage: value,
    backgroundClip: 'text',
    textFillColor: 'transparent',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }),
  size: (value: number) => ({
    width: value,
    height: value,
  }),
  mx: (value: number) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: number) => ({
    marginTop: value,
    marginBottom: value,
  }),
  px: (value: number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  py: (value: number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  radiusZero: (value: 'left' | 'right' | 'top' | 'bottom') => {
    if (value === 'left') {
      return {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      };
    }

    if (value === 'right') {
      return {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      };
    }

    if (value === 'bottom') {
      return {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      };
    }

    if (value === 'top') {
      return {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      };
    }

    return {};
  },
  focusVisible: (value: any) => ({
    '@supports not selector(:focus-visible)': {
      '&:focus': value,
    },
    '&:focus-visible': value,
  }),
  focusVisibleBgColor: (value: string) => ({
    '@supports not selector(:focus-visible)': {
      '&:focus': {
        backgroundColor: value,
      },
    },
    '&:focus-visible': {
      backgroundColor: value,
    },
  }),
  fontFeature: (value: 'monospace' | false) => {
    return value === 'monospace'
      ? { fontFeatureSettings: `'tnum' on, 'lnum' on, 'ss06' on, 'ss08' on` }
      : {};
  },
  focusStyle: (variant: 'outline' | 'innerOutline' | 'solid' | 'emphasize') => {
    switch (variant) {
      case 'outline':
        return { boxShadow: '0px 0px 0px 3px rgba(0, 125, 250, 0.5)' };
      case 'innerOutline':
        return { boxShadow: 'inset 0px 0px 0px 3px rgba(0, 125, 250, 0.5)' };
      case 'solid':
        return {
          background: 'rgba(36, 42, 48, 0.06)',
        };
      case 'emphasize':
        return {
          boxShadow:
            '0px 0px 0px 3px rgba(0, 125, 250, 0.44), inset 0px 0px 0px 1px #4A94DC',
        };
    }
  },
  textEllipsis: (value: boolean | { lineClamp: number }) => {
    if (value === false) {
      return {};
    }

    const lineClamp = value === true ? 1 : value.lineClamp;

    return {
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      lineClamp,
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': lineClamp,
    };
  },
  clickable: (
    params:
      | InteractiveIntensity
      | {
          intensity: InteractiveIntensity | ClickableIntensityStyle;
          options?: ClickableOption;
        }
      | undefined
  ) => {
    if (params === undefined) {
      return {};
    }

    const { intensity, options } =
      typeof params === 'string' ? { intensity: params, options: {} } : params;

    if (intensity === 'none') {
      return {
        ['&:before']: {
          display: 'none',
        },
      };
    }

    if (
      typeof intensity === 'string' &&
      !Object.keys(defaultIntensities).includes(intensity)
    ) {
      return {};
    }

    const intensities =
      typeof intensity === 'string' ? defaultIntensities[intensity] : intensity;

    const activeTransformStyle =
      options?.activeTransform != null
        ? {
            transition: '0s',
            transform: options.activeTransform,
          }
        : {};

    const horizontalReverseOffset = options?.horizontalOffset;

    const horizontalOffsetStyle =
      horizontalReverseOffset != null
        ? {
            paddingLeft: `${horizontalReverseOffset}px`,
            paddingRight: `${horizontalReverseOffset}px`,
            marginLeft: `${-1 * horizontalReverseOffset}px`,
            marginRight: `${-1 * horizontalReverseOffset}px`,
          }
        : {};

    const defaultBeforeStyle = {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: `${colors.grayDarker}`,
      borderRadius: 'inherit',
      opacity: 0,
      transition: '0.15s',
      pointerEvents: 'none',
    };

    return {
      position: 'relative',
      cursor: 'pointer',
      ...horizontalOffsetStyle,
      '&:before':
        options?.initialTransform == null
          ? defaultBeforeStyle
          : {
              ...defaultBeforeStyle,
              transform: options.initialTransform,
            },
      '&:hover': {
        '&:before': {
          transition: 'opacity 0s',
          opacity: intensities.hover,
          transform: 'none',
        },
      },
      '&:active': {
        '&:before': {
          transition: 'opacity 0s',
          opacity: intensities.active,
        },
        ...activeTransformStyle,
      },
      /**
       * safari <= 15.4이하에서는 focus-visible이 유효하지 않아 focus로 style을 적용한다.
       * chrome에서도 focus 스타일을 적용할 경우 Button클릭 후 스타일이 사라지지 않는 현상이 있어 supports로 컨트롤
       * @supports selector는 Safari 14.1부터 지원되지만, known(won't fix) issue로 다룬다.
       */
      '@supports not selector(:focus-visible)': {
        '&:focus': {
          '&:before': {
            transition: 'opacity 0s',
            opacity: intensities.active,
          },
          ...activeTransformStyle,
        },
      },
      '&:focus-visible': {
        '&:before': {
          transition: 'opacity 0s',
          opacity: intensities.active,
        },
        ...activeTransformStyle,
      },
    };
  },
  hoverable: (
    params:
      | InteractiveIntensity
      | {
          intensity: InteractiveIntensity | number;
          options?: InteractiveStyleOptions;
        }
      | undefined
  ) => {
    if (params === undefined) {
      return {};
    }

    const { intensity, options } =
      typeof params === 'string' ? { intensity: params, options: {} } : params;

    if (intensity === 'none') {
      return {
        ['&:before']: {
          display: 'none',
        },
      };
    }

    if (
      typeof intensity === 'string' &&
      !Object.keys(defaultIntensities).includes(intensity)
    ) {
      return {};
    }

    const intensities =
      typeof intensity === 'string'
        ? defaultIntensities[intensity]
        : { hover: intensity };

    const horizontalReverseOffset = options?.horizontalOffset;

    const horizontalOffsetStyle =
      horizontalReverseOffset != null
        ? {
            paddingLeft: `${horizontalReverseOffset}px`,
            paddingRight: `${horizontalReverseOffset}px`,
            marginLeft: `${-1 * horizontalReverseOffset}px`,
            marginRight: `${-1 * horizontalReverseOffset}px`,
          }
        : {};

    return {
      position: 'relative',
      ...horizontalOffsetStyle,
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: `${colors.grayDarker}`,
        borderRadius: 'inherit',
        opacity: 0,
        pointerEvents: 'none',
      },
      '&:hover': {
        '&:before': {
          opacity: intensities.hover,
        },
      },
    };
  },
} as const;

export { utils };
