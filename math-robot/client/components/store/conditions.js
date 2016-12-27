/**
 * Created by Exper1ence on 2016/12/27.
 */
import React from 'react';
import {
    ADD_CONDITION, REMOVE_CONDITION,
    ADD_REQUIREMENT, REMOVE_REQUIREMENT, SET_VALUE
} from '../actions';
import InverseNumber from '../InverseNumber';
import Arrangement from '../Arrangement';
import _ from 'lodash';

function getCondition(condition, key) {
    let element, data;
    let alpha = String.fromCharCode('A'.charCodeAt(0) + key);
    switch (condition) {
        case 'InverseNumber':
            data = {name: '逆序数 ' + alpha, type: 'InverseNumber'};
            element = <InverseNumber key={key} name={data.name}/>;
            break;
        case 'Arrangement':
            data = {name: '排列 ' + alpha, type: 'Arrangement'};
            element = <Arrangement key={key} name={data.name}/>;
            break;
        default:
            break;
    }
    data.requirement = [];
    return {element, data};
}

export default function conditions(state = {
    elements: [],
    datas: [],
    count: 0,
}, {condition, type, requirement, target, value,}) {
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
            const i = state.datas.findIndex(data => target == data.name);
            return {
                elements: _.concat(state.elements.slice(0, i), state.elements.slice(i + 1)),
                datas: _.concat(state.datas.slice(0, i), state.datas.slice(i + 1)),
                count: state.count,
            };
        }
        case ADD_REQUIREMENT: {
            const i = state.datas.findIndex(data => target == data.name);
            const datas = [...state.datas];
            datas[i].requirement.push(requirement);
            return {
                elements: [...state.elements],
                datas,
                count: state.count,
            };
        }
        case REMOVE_REQUIREMENT: {
            const i = state.datas.findIndex(data => target == data.name);
            const datas = [...state.datas];
            datas[i].requirement = _.concat(datas[i].requirement.slice(0, i), datas[i].requirement.slice(i + 1));
            return {
                elements: [...state.elements],
                datas,
                count: state.count,
            };
        }
        case SET_VALUE: {
            const i = state.datas.findIndex(data => target == data.name);
            const datas = [...state.datas];
            datas[i].value = value;
            return {
                elements: [...state.elements],
                datas,
                count: state.count,
            }
        }
        default:
            return state;
            break;
    }
}