import React from 'react';

function Square(props) {
    return (
        <button onClick={props.onClickBoard}>
            {props.value}
        </button>
    )
}

export default Square;
