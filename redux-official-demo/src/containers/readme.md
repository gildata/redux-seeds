# react-redux

https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

http://redux.js.org/docs/basics/UsageWithReact.html


```jsx

import {connect} from 'react-redux';


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
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);




```














