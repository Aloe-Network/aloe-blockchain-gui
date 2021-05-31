import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as AloeIcon } from './images/aloe.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AloeIcon} viewBox="0 0 150 58" {...props} />;
}
