/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'

const Close = ({dispatch, onClick}) => (
    <div
        style={{
            position: 'absolute',
            top: '0px',
            right: '5px',
            cursor: 'pointer',
        }}
        onClick={onClick}>
        x
    </div>
);

Close.propTypes = {};

export default Close;