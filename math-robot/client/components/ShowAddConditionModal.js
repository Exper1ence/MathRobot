/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {showModal, showCurtain} from './actions';
import Add from './Add';

function mapStateToProps(state) {
    return {
        state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick(){
            dispatch(showModal({
                selected: 'AddCondition',
            }));
            dispatch(showCurtain());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);