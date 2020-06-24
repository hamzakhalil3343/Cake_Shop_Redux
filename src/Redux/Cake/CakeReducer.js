import {BUY_CAKE} from './CakeType';
const initialState={
    numofCake=10
}
const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCake=state.numofCake-1
        }
        default: return state;
    }
}
export default cakeReducer;