import React from 'react';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import { axe } from './test-utils';

import App from './App';

describe('App', () => {
  it('should render snapshot', async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should render visual snapshot', async () => {
    render(<App />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it('should validate accessibility voilations', async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
