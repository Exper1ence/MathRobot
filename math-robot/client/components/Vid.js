/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'

const Vid = ({children, style}) => (
    <div
        style={Object.assign({
            paddingTop: '.5rem',
            paddingLeft: '.5rem',
        }, style)}>
        {children}
    </div>
);

Vid.propTypes = {};

export default Vid;