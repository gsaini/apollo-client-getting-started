import React from 'react';
import { render } from '../../test-utils';
import { generateImage } from 'jsdom-screenshot';
import { axe } from '../../test-utils';
import { Todos } from './Todos';
import { GET_TODOS, UPDATE_TODO } from './queries';
import { todos } from './mocks';
import { fireEvent, waitFor } from '@testing-library/react';

describe('Todos components', () => {
    const mocks = [{
        request: {
            query: GET_TODOS
        },
        result: {
            data: { todos }
        }
    }];

    it('should render snapshot', async () => {
        const { container } = await render(<Todos />, { mocks });
        expect(container).toMatchSnapshot();
    });

    it('should render visual snapshot', async () => {
        await render(<Todos />, { mocks });

        const screenshot = await generateImage();
        expect(screenshot).toMatchImageSnapshot();
    });

    it('should validate accessibility voilations', async () => {
        const { container } = await render(<Todos />, { mocks });
        expect(await axe(container)).toHaveNoViolations();
    });

    it('should update todo on toggle task selection', async () => {
        const mutationMock = [{
            request: {
                query: UPDATE_TODO,
                variables: { id: '1', completed: true }
            },
            result: jest.fn(() => ({
                data: {
                    updateTodo: {
                        ...todos[0],
                        completed: true
                    }
                }
            }))
        }];
        const { getByLabelText } = await render(<Todos />, { mocks: mutationMock });
        fireEvent.click(getByLabelText(todos[0].title));
        const updateMutationMock = mutationMock[0].result;
        await waitFor(() => expect(updateMutationMock).toHaveBeenCalledWith());
    });
});
