/**
 * Created by Exper1ence on 2016/12/26.
 */
import Line from './Line';
import Container from './Container';
import React, {PropTypes} from 'react'

const Title = ({name}) => (
    <Container
        style={{
            fontSize: '50px',
            color: '#373a3c',
        }}>
        {name}
        <Line/>
    </Container>
);

Title.propTypes = {};

export default Title;