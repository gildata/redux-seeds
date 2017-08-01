import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, indexKey}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: (completed ? 'line-through' : 'none'),
            color: (completed ? 'green' : 'red'),
        }}
        data-indexKey={indexKey}
        >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
/* 
    data_indexKey: PropTypes.number.isRequired
    dataIndexKey: PropTypes.number.isRequired

    data-indexKey: PropTypes.number.isRequired
*/

export {Todo};
export default Todo;