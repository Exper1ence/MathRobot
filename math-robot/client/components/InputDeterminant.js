/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'
import Input from './Input';
import {connect} from 'react-redux';
import Fill from './Fill';
import Line from './Line';
import Div from './Div';
import Vid from './Vid';
import {setValue, focusInput} from './actions';

const InputDeterminant = ({conditions, name, dispatch}) => {
    const cdt = conditions.find(cdt => cdt.name == name);
    let rows = [], cols = [];
    for (let i = 0; i < cdt.value.row.value; i++) {
        for (let j = 0; j < cdt.value.col.value; j++) {
            cols.push(
                <Input
                    key={j} size={.5}
                    value={cdt.value.data[i] && cdt.value.data[i][j] ? cdt.value.data[i][j].data : ''}
                    type="realNumber"
                    onChange={({value, valid}) => {
                        const newData = cdt.value.data.map((row) => [...row]);
                        newData[i] = newData[i] || [];
                        newData[i][j] = {data: value, valid,};
                        dispatch(setValue(Object.assign({}, cdt, {
                            value: Object.assign({}, cdt.value, {
                                data: newData,
                            }), dirty: false
                        })))
                    }}
                    onBlur={() => {
                        const newData = [...cdt.value.data];
                        let valid = true;
                        for (let row of newData) {
                            for (let col of row) {
                                if (!col.valid) {
                                    valid = false;
                                    break;
                                }
                            }
                        }
                        dispatch(setValue(Object.assign({}, cdt, {
                            dirty: valid, valid: true,
                        })));
                    }}
                    onEnter={() => dispatch(focusInput({name, focus: cdt.value.length - 1}))}
                />)
        }
        rows.push(<div key={i}>{cols}</div>
        );
        cols = [];
    }
    return (
        <Fill style={{justifyContent: 'center'}}>
            <Vid>
                <Div><Line vertical/></Div>
                <Div style={{flexDirection: 'column'}}>{rows}</Div>
                <Div><Line vertical/></Div>
            </Vid>
        </Fill>
    )
};

InputDeterminant.propTypes = {};
function mapState(state) {
    return {
        conditions: state.conditions.datas,
    }
}
export default connect(mapState)(InputDeterminant);