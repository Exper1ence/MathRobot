/**
 * Created by Exper1ence on 2016/12/27.
 */
import {createStore, combineReducers,} from 'redux';
import modal from './modal';
import curtain from './curtain';
import conditions from './conditions';
import questions from './questions';

export default createStore(combineReducers({modal, curtain, conditions,questions,}));