/**
 * Created by Exper1ence on 2016/12/31.
 */
import {createStore, combineReducers,} from 'redux';
import resolution from './resolution';

export default createStore(combineReducers({resolution,}));