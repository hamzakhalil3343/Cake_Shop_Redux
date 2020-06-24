import {createStore} from 'redux';
import cakeReducer from '../Redux/Cake/CakeReducer'
const store = createStore(cakeReducer);
export default store;