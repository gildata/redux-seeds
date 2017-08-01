import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map(
                (todo) => {
                    console.log(`todo.text`, todo.text);
                    console.log(`todo.id`, todo.id);
                    console.log(`todo`, todo);
                    {/* let key = todo.id; */}
                    return(
                        <Todo
                            key={todo.id}
                            indexKey={todo.id}
                            {...todo}
                            onClick={
                                () => onTodoClick(todo.id)
                            }
                        />
                    );
                }
            )
        }
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export {TodoList};
export default TodoList;