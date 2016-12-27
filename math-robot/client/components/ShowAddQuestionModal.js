/**
 * Created by greyman on 2016/12/27.
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
                selected: 'AddQuestion',
            }));
            dispatch(showCurtain());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);