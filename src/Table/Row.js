import React from 'react';

import './Table.css';

const Row = ( props ) => {
    return (
        <div className="row" onClick={props.click} onMouseEnter={props.hover} onMouseLeave={props.leave}>
            <div>{props.name}</div>
            <div></div>
            <div>{props.version}</div>
            <div>{props.scope.join(', ')}</div>
        </div>
    )
};

export default Row;