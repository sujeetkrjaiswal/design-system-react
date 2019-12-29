import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button Component', () => {
  let props: any;

  beforeEach(() => {
    props = {
      display: 'basic',
      color: 'primary',
      size: 'md',
      disabled: false,
      onClick: () => {},
    };
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderWrapper = () => shallow(<Button {...props}>Test Button</Button>);

  describe('Snapshots', () => {
    it('should match snapshots as primary themed', () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it('should match snapshots as secondary themed', () => {
      props.theme = 'secondary';
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
