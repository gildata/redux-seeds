import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return (
            <div>
                {/* <h1>active children</h1> */}
                <div style={{color: 'rgba(0, 255, 0, 0.7)'}}>
                    {children}
                </div>
            </div>
        );
    }
    return (
        <a
            href="#"
            onClick={
                (e) => {
                    e.preventDefault();
                    onClick();
                }
            }
        >
            {children}
        </a>
    );
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export {Link};
export default Link;