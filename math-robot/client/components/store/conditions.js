/**
 * Created by Exper1ence on 2016/12/27.
 */
import React from 'react';
import {
    ADD_CONDITION, REMOVE_CONDITION,
    ADD_REQUIREMENT, REMOVE_REQUIREMENT, SET_VALUE,
    FOCUS_INPUT, RESET_FOCUS,
} from '../actions';
import InverseNumber from '../InverseNumber';
import Arrangement from '../Arrangement';
import _ from 'lodash';
import Div from '../Div';
import Determinant from '../Determinant';

function getCondition(condition, key) {
    let element, data;
    let alpha = String.fromCharCode('A'.charCodeAt(0) + key);
    switch (condition) {
        case 'InverseNumber':
            data = {name: '逆序数 ' + alpha, type: 'InverseNumber'};
            element = <Div key={key}><InverseNumber name={data.name}/></Div>;
            break;
        case 'Arrangement':
            data = {name: '排列 ' + alpha, type: 'Arrangement'};
            element = <Div key={key}><Arrangement name={data.name}/></Div>;
            break;
        case 'Determinant':
            data = {name: '行列式 ' + alpha, type: 'Determinant'};
            element = <Div key={key}><Determinant name={data.name}/></Div>;
            break;
        default:
            break;
    }
    data.requirement = [];
    data.focus = 0;
    return {element, data};
}

export default function conditions(state = {
    elements: [],
    datas: [],
    count: 0,
}, {condition, type, requirement, name, value, valid, dirty, focus}) {
    switch (type) {
        case ADD_CONDITION: {
            if (state.count > 26)return state;
            const {element, data}=getCondition(condition, state.count++);
            return {
                elements: [
                    ...state.elements,
                    element
                ],
                datas: [
                    ...state.datas,
                    data
                ],
                count: state.count,
            }
        }
            break;
        case REMOVE_CONDITION: {
            const i = state.datas.findIndex(data => name == data.name);
            return {
                elements: _.concat(state.elements.slice(0, i), state.elements.slice(i + 1)),
                datas: _.concat(state.datas.slice(0, i), state.datas.slice(i + 1)),
                count: state.count,
            };
        }
        case ADD_REQUIREMENT: {
            const i = state.datas.findIndex(data => name == data.name);
            const datas = [...state.datas];
            datas[i].requirement.push(requirement);
            return {
                elements: [...state.elements],
                datas,
                count: state.count,
            };
        }
        case REMOVE_REQUIREMENT: {
            const i = state.datas.findIndex(data => name == data.name);
            const datas = [...state.datas];
            datas[i].requirement = _.concat(datas[i].requirement.slice(0, i), datas[i].requirement.slice(i + 1));
            return {
                elements: [...state.elements],
                datas,
                count: state.count,
            };
        }
        case SET_VALUE: {
            const i = state.datas.findIndex(data => name == data.name);
            const datas = [...state.datas];
            datas[i].value = value;
            datas[i].valid = valid;
            datas[i].dirty = dirty;
            return {
                elements: [...state.elements],
                datas,
                count: state.count,
            }
        }
        case FOCUS_INPUT: {
            const i = state.datas.findIndex(data => name == data.name);
            const newState = Object.create(state);
            newState.datas[i].focus = focus;
            return newState;
        }
        case RESET_FOCUS: {
            const i = state.datas.findIndex(data => name == data.name);
            const newState = Object.create(state);
            newState.datas[i].focus = -1;
            return newState;
        }
        default:
            return state;
            break;
    }
}