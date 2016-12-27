/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'
import Fill from './Fill';

const Caption = ({children, size = 1}) => (
    <div
        style={{
            justifyContent: 'flex-end',
            width: size * 60 + 'px',
            alignItems: 'center',
        }}>
        {children}
    </div>
);

Caption.propTypes = {};

export default Caption;