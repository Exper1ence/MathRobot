/**
 * Created by Exper1ence on 2016/12/26.
 */
import Line from './Line';
import Container from './Container';
import React, {PropTypes} from 'react'
import Fill from './Fill';

const Title = ({name}) => (
    <Fill width
        style={{
            fontSize: '50px',
            color: '#373a3c',
        }}>
        {name}
        <Line/>
    </Fill>
);

Title.propTypes = {};

export default Title;