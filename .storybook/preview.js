import {addParameters, addDecorator} from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
addDecorator(withA11y);
addDecorator(withInfo);

addParameters({
  backgrounds: [
    { name: 'light', value: '#efefef', default: true },
    { name: 'dark', value: '#424242' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  viewport: {
    viewports: {...INITIAL_VIEWPORTS}, // newViewports would be an ViewportMap. (see below for examples)
  },
});
