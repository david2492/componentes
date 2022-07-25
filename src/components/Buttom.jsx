import React from 'react';

const Button = ({color,index,changeQuotes}) => {
    return (
        <div>
            <p style={{ color: color }}>{index}</p>
            <button onClick={changeQuotes} style={{ background: color }}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Button;