import React from 'react';


const YBar = () => {
    const itr = ['a', 'b', 'c', 'd', 'i', 'f', 'g', 'h']
    return (
            <div className={'yBar'}>
                <div className={'yBarPlus'}></div>
                {itr.map((item, count) =>
                    <div key={count} className={'yBarItem'}>{item}</div>
                )}
                <div className={'yBarPlus'}></div>
            </div>
    );
};

export default YBar;