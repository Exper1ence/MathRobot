/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Add, Conditions, Curtain,} from './components';
import {Provider} from 'react-redux';
import store from './components/store';

class MathRobot extends Component {
    render() {
        return (
            <Provider store={store}>
                <div style={{width:'100%'}}>
                    <Curtain/>
                    <div style={{
                        width: '1024px',
                        margin: 'auto',
                    }}>
                        <Conditions></Conditions>
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<MathRobot/>, document.getElementById('math-robot'));