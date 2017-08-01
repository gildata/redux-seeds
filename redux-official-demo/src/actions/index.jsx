/**
 * Actions Creators
 */

let nextTodoId = 0;
// initial state


export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: parseInt(nextTodoId++),
        text
    };
};

// id: (nextTodoId++).toString(),

// ES6 arrow function & (single syntax) auto ruturn
export const deleteTodo = (text) => ({
    type: 'DELETE_TODO',
    text
});

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};


export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

/*

let id = (id ? id : undefined);

// not defined !== undefined

const func = (id = `default value`) => {
    // 
}

payloads: {
    id: (id || `default value`),
    text: ''
}


*/