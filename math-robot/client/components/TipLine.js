/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'
import Fill from './Fill';
import {connect} from 'react-redux';

const TipLine = ({name, conditions, onCheck}) => {
    const cdt = conditions.find(cdt => cdt.name == name);
    let word = '未知';
    let backgroundColor = '#f0ad4e';
    if (cdt.dirty) {
        if (cdt.valid) {
            word = '已知';
            backgroundColor = '#5cb85c';
        }
        else {
            word = '无效值';
            backgroundColor = '#d9534f';
        }
        !onCheck || onCheck(cdt.valid);
    }
    return (
        <Fill width
              style={{
                  padding: '.5rem 1rem',
                  backgroundColor,
                  alignItems: 'center',
                  color: 'white',
                  justifyContent: 'center',
                  fontWeight: 'bold',
              }}>
            {word}
        </Fill>
    )
};

TipLine.propTypes = {};
function mapState(state) {
    return {
        conditions: state.conditions.datas,
    }
}

export default connect(mapState)(TipLine);