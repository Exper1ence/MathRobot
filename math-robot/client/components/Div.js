/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'

const Div = ({children, style}) => (
    <div
        style={Object.assign({marginBottom: '.5rem', marginRight: '.5rem'}, style)}>
        {children}
    </div>
);

Div.propTypes = {};

export default Div;