import React from 'react';

const OutlineButton = ({children}) => {
    return (
        <button className="btn btn-outline border-0 border-b-4 mt-4">{children}</button>
    );
};

export default OutlineButton;