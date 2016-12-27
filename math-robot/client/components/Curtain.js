/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
const Curtain = ({display}) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
    
    </div>
);

Curtain.propTypes = {};
function mapStateToProps(state) {
    return {
        display: state.curtain
    }
}

export default connect(mapStateToProps)(Curtain);