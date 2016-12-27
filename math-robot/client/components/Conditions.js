/**
 * Created by Exper1ence on 2016/12/26.
 */
import Title from './Title';
import Add from './Add';
import Container from './Container';
import Board from './Modal';
import React, {PropTypes} from 'react'
import InverseNumber from './InverseNumber';
import DataTypeModal from './DataTypeModal';
import AddData from './AddData';
import Curtain from './Curtain';

const Conditions = ({}) => (
    <Container>
        <Title name="条件"/>
        <Container>
            <InverseNumber>
            </InverseNumber>
            <Container>
                <AddData/>
            </Container>
            <DataTypeModal>
            
            </DataTypeModal>
        </Container>
    </Container>
);

Conditions.propTypes = {};

export default Conditions;