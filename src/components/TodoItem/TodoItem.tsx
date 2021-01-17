import React from 'react';
import { ToDo } from '../../types';

type TodoItemProps = {
    todo: ToDo;
    onChange: (todo: Pick<ToDo, 'id' | 'completed'>) => void
};

export const TodoItem = ({ todo, onChange }: TodoItemProps): JSX.Element => {
    const { id, title, completed } = todo;

    return (
        <>
            <div className="Todo__item">
                <label htmlFor={`${id}-checkbox`}>{title}</label>
                <input
                    id={`${id}-checkbox`}
                    type="checkbox"
                    checked={completed || false}
                    onChange={() => onChange({ id, completed: !completed })}
                />
            </div>
        </>);
}