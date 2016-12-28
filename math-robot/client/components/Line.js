/**
 * Created by Exper1ence on 2016/12/26.
 */
import Container from './Container';
import React, {PropTypes} from 'react'

const Line = ({vertical}) => {
    const style = {border: '1px solid #ccc'};
    if (vertical) style.height = '100%';
    else style.width = '100%';
    return (
        <div style={style}/>
    )
};

Line.propTypes = {};

export default Line;