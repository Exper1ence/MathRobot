/**
 * Created by Exper1ence on 2016/12/26.
 */
import Modal from './Modal';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
function mapStateToProps(state) {
    return {
        display: state.modal == 'DataType' ? 'flex' : 'none',
    }
}

export default connect(mapStateToProps)(Modal);