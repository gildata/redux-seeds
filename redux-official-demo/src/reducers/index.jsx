import {combineReducers} from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';

// combineReducers & root_reducer
const RootReducer = combineReducers({
    todos,
    visibilityFilter
});

export {RootReducer};
export default RootReducer;