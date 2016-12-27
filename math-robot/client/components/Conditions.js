/**
 * Created by Exper1ence on 2016/12/26.
 */
import Title from './Title';
import Add from './Add';
import Container from './Container';
import Board from './Modal';
import React, {PropTypes} from 'react'
import InverseNumber from './InverseNumber';

const Conditions = ({}) => (
    <Container>
        <Title name="条件"/>
        <Container>
            <InverseNumber>
            </InverseNumber>
            <Container>
                <Add/>
            </Container>
        </Container>
    </Container>
);

Conditions.propTypes = {};

export default Conditions;