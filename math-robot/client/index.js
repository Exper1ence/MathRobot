/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Add,Conditions} from './components';

class MathRobot extends Component {
    render() {
        return (
            <div style={{
                width:'1024px',
                margin:'auto',
            }}>
                <Conditions></Conditions>
            </div>
        )
    }
}

ReactDOM.render(<MathRobot/>, document.getElementById('math-robot'));