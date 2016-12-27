/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
//sdfasdad
const Container = ({style, children}) => (
    <div
        style={Object.assign({
            width: '100%', margin: '5px',
            alignItems:'center',
        }, style)}>
        {children}
    </div>
);

Container.propTypes = {};

export default Container;