import React, { FC } from 'react';
import { actions } from '@storybook/addon-actions';
// import centered from '@storybook/addon-centered/react';
import { withCssResources } from '@storybook/addon-cssresources';
import { withKnobs, radios } from '@storybook/addon-knobs';

import mdx from './Button.docs.mdx';
import Button from './Button';
import { IButtonProps } from './Button.types';
import introductionNotes from './Button.introduction.notes.md';
import designNotes from './Button.design.notes.md';

export default {
  title: 'Button Component',
  componentSubtitle: 'A wrapper over html button elements',
  decorators: [withCssResources, withKnobs],
  parameters: {
    assets: ['https://ant.design/components/button/'],
    docs: {
      page: mdx,
    },
    cssresources: [
      {
        id: 'bluetheme',
        code: '<style>body { background-color: lightblue; }</style>',
        picked: false,
      },
    ],
    notes: { Introduction: introductionNotes, 'Design Notes': designNotes },
  },
};

const eventHandlers = actions({ onClick: 'button is clicked' });
type TypeButtonSize = IButtonProps['size'];
const label = 'Select Size';
const options: Record<string, TypeButtonSize> = {
  ExtraSmall: 'xsm',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  ExtraLarge: 'xlg',
};
const defaultValue: TypeButtonSize = 'md';
const sizeValueOptions = radios(label, options, defaultValue, 'Switch-group-1');

export const Primary: FC<IButtonProps> = () => (
  <Button
    label="Stroked"
    display="stroked"
    color="primary"
    size={sizeValueOptions}
    disabled={false}
    {...eventHandlers}
  />
);
