import React from 'react';
import {useSelector} from 'react-redux';

const CakeContainerHooks = () => {
    const numofCakes=useSelector(state=>state.numofCake);
    return (
        <div>
             <div>
            
            <h2>Number of Cake {numofCakes}</h2>
            <button >Buy Cake</button>
        </div>
        </div>
    );
};

export default CakeContainerHooks;