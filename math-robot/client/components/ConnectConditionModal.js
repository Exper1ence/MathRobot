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

const ConnectConditionModal = ({isVisible, datas, ignoreName, allowType, dispatch,}) => {
    let items = datas.filter((data, i) => {
        return allowType && data.name != ignoreName && allowType.indexOf(data.type) >= 0;
    });
    items = items.map((data, i) => (
        <Div key={i}><Button onClick={() => {
            dispatch(hideCurtain());
            dispatch(hideModal());
            dispatch(addRequirement({name: ignoreName, requirement: data.name}));
        }}>
            {data.name}
        </Button></Div>
    ));
    return (
        <Modal isVisible={isVisible} title='可选依赖'>
            <Vid style={{
                justifyContent:'center',
            }}>
                {items.length ? items : <Div>{'< 空 >'}</Div>}
            </Vid>
        </Modal>
    )
};

function mapStateToProps(state) {
    const {selected, ignoreName, allowType,}=state.modal;
    return {
        isVisible: selected == 'ConnectCondition',
        datas: state.conditions.datas,
        ignoreName,
        allowType,
    }
}

export default connect(mapStateToProps)(ConnectConditionModal);