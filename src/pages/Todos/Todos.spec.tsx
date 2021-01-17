import React from 'react';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import { axe } from '../../test-utils';
import { Todos } from './Todos';

describe('Todos components', () => {
    it('should render snapshot', async () => {
        const { container } = render(<Todos />);
        expect(container).toMatchSnapshot();
    });

    it('should render visual snapshot', async () => {
        render(<Todos />);

        const screenshot = await generateImage();
        expect(screenshot).toMatchImageSnapshot();
    });

    it('should validate accessibility voilations', async () => {
        const { container } = render(<Todos />);
        expect(await axe(container)).toHaveNoViolations();
    });
});
