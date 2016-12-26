/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Add,Condition} from './Components';

class MathRobot extends Component {
    render() {
        return (
            <div style={{
                width:'1024px',
                margin:'auto',
            }}>
                <Condition></Condition>
            </div>
        )
    }
}

ReactDOM.render(<MathRobot/>, document.getElementById('math-robot'));