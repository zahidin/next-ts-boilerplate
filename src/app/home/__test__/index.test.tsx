import React from 'react';
import { mount } from 'enzyme';
import Index from '@pages/index';

describe('index page', () => {
  it('should have div component', () => {
    const subject = mount(<Index />);
    expect(subject.find('div')).toHaveLength(1);
  });
});
