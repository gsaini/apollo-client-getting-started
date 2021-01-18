import { fireEvent } from '@testing-library/react';
import React from 'react';
import { render } from '../../test-utils';
import { TodoItem } from './TodoItem';

describe('Todos components', () => {
    const todo = { id: "1", title: "lorem ipsum", completed: false };

    it('should render snapshot', async () => {
        const { container } = await render(<TodoItem todo={todo} onChange={jest.fn()} />);

        expect(container).toMatchSnapshot();
    });

    it('should toggle status', async () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = await render(<TodoItem todo={todo} onChange={onChangeMock} />);

        fireEvent.click(getByLabelText(todo.title));

        expect(onChangeMock).toHaveBeenCalledWith({ id: todo.id, completed: true });
    });
});