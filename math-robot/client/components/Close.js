/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {hideModal,hideCurtain,} from './actions';

const Close = ({dispatch}) => (
    <div
        style={{
            position: 'absolute',
            top: '0px',
            right: '5px',
            cursor: 'pointer',
        }}
        onClick={() => {
            dispatch(hideModal());
            dispatch(hideCurtain());
        }}>
        x
    </div>
);

Close.propTypes = {};

export default connect()(Close);