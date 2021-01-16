import React from 'react';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
