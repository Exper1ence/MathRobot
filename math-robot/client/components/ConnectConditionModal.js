/**
 * Created by Exper1ence on 2016/12/27.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import Button from './Button';
import {addRequirement, hideCurtain, hideModal} from './actions';
import Vid from './Vid';
import Div from './Div';

const ConnectConditionModal = ({isVisible, conditions, ignoreName, allowType, dispatch,}) => {
    const items = [];
    conditions.forEach((cdt, i) => {
        if ((!allowType) || (cdt.name == ignoreName) || ( allowType.indexOf(cdt.type) < 0))return;
        items.push(<Div key={i}><Button onClick={() => {
            dispatch(hideCurtain());
            dispatch(hideModal());
            dispatch(addRequirement({name: ignoreName, requirement: cdt.name}));
        }}>{cdt.name}</Button></Div>);
    });
    return (
        <Modal isVisible={isVisible} title='可选依赖'>
            <Vid style={{justifyContent: 'center'}}>
                {items.length > 0 ? items : <Div>{'< 空 >'}</Div>}
            </Vid>
        </Modal>
    );
};

function mapStateToProps(state) {
    const {selected, ignoreName, allowType,}=state.modal;
    return {
        isVisible: selected == 'ConnectCondition',
        conditions: state.conditions.datas,
        ignoreName,
        allowType,
    }
}

export default connect(mapStateToProps)(ConnectConditionModal);