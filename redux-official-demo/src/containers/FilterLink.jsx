import {connect} from 'react-redux';

import {setVisibilityFilter} from '../actions';
import Link from '../components/Link';

// mapStateToProps()
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

// mapDispatchToProps()
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
};

// connect
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export {FilterLink};
export default FilterLink;