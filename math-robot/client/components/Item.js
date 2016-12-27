/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'

const Item = ({children}) => (
    <div style={{
        alignItems: 'center',
        flexGrow: 1,
    }}>
        {children}
    </div>
);

Item.propTypes = {};

export default Item;