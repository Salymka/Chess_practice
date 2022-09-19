import React from 'react';


const XBar = () => {
    const itr = ['8', '7', '6', '5', '4', '3', '2', '1']
    return (
        <div className={'xBar'}>
            <div className={'xBarPlus'}></div>
            {itr.map((item, count) =>
                <div key={count} className={'xBarItem'}>{item}</div>
            )}
            <div className={'xBarPlus'}></div>
        </div>
    );
};

export default XBar;