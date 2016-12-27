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
import Vid from './Vid';
import Div from './Div';
import Fill from './Fill';

const Conditions = ({conditions}) => (
    <Container style={{marginTop: '3rem'}}>
        <Title name="条件"/>
        <Div/>
        <Fill width>{conditions}</Fill>
        <Div><ShowAddConditionModal/></Div>
        <AddConditionModal/>
        <ConnectConditionModal/>
    </Container>
);

Conditions.propTypes = {};
function mapState(state) {
    return {
        conditions: state.conditions.elements,
    }
}

export default connect(mapState)(Conditions);