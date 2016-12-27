/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'

const Item = ({children, style}) => (
    <div style={Object.assign({
        alignItems: 'center',
    }, style)}>
        {children}
    </div>
);

Item.propTypes = {};

export default Item;