/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {showModal, showCurtain} from './actions';
import Add from './Add';

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch, onwProps) {
    return {
        onClick(){
            dispatch(showModal({
                selected: 'ConnectCondition',
                allowType: onwProps.allowType || [],
                ignoreName: onwProps.ignoreName,
            }));
            dispatch(showCurtain());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);