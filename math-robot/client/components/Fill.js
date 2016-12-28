/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'

const Fill = ({children, height, style}) => {
    const sty = {};
    if (height) sty.height = '100%';
    else sty.width = '100%';
    return (
        <div
            style={Object.assign(sty, style)}>
            {children}
        </div>
    )
};

Fill.propTypes = {};

export default Fill;