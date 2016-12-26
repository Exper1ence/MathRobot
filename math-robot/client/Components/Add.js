/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import Button from './Button';


export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <Button secondary>
                添加
            </Button>
        );
    }
}