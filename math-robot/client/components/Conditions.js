/**
 * Created by Exper1ence on 2016/12/26.
 */
import Title from './Title';
import Container from './Container';
import React, {PropTypes} from 'react'
import AddConditionModal from './AddConditionModal';
import ShowAddConditionModal from './ShowAddConditionModal';
import {connect} from 'react-redux';
import ConnectConditionModal from './ConnectConditionModal';
import _ from 'lodash';


const Conditions = ({conditions}) => (
    <Container>
        <Title name="条件"/>
        <Container>
            {conditions}
            <Container>
                <ShowAddConditionModal/>
            </Container>
            <AddConditionModal/>
            <ConnectConditionModal/>
        </Container>
    </Container>
);

Conditions.propTypes = {};
function mapState(state) {
    return {
        conditions: state.conditions.elements,
    }
}

export default connect(mapState)(Conditions);