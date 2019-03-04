import React from 'react';

import './Table.css';

const Row = ( props ) => {
    return (
        <div className="row" onClick={props.click}>
            <div>{props.name}</div>
            <div>{props.version}</div>
            <div>{props.scope.join(', ')}</div>
        </div>
    )
};

export default Row;