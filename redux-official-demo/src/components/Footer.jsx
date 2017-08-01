import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <div>
        Show: <br/>
        <FilterLink filter="SHOW_ALL">
            <button title="All">All</button>
        </FilterLink>
        <span style={{marginLeft: 5}}></span>
        <FilterLink filter="SHOW_ACTIVE">
            <button title="Active">Active</button>
        </FilterLink>
        <span style={{marginLeft: 5}}></span>
        <FilterLink filter="SHOW_COMPLETED">
            <button title="Completed">Completed</button>
        </FilterLink>
        {/* jsx comments */}
    </div>
);

export default Footer;