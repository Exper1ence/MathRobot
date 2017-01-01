// /**
//  * Created by Exper1ence on 2016/12/31.
//  */
import React, {PropTypes} from 'react';
import Component from './Component';
import Text from './Text';
import {connect,} from 'react-redux';

class Responsive extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({resolution, xs, sm, md, lg, xl, render,}) {
        let args;
        if (resolution >= 0) {
            args = {...xs};
        }
        if (resolution >= 1) {
            args = {...args, ...sm};
        }
        if (resolution >= 2) {
            args = {...args, ...md};
        }
        if (resolution >= 3) {
            args = {...args, ...lg};
        }
        if (resolution >= 4) {
            args = {...args, ...xl};
        }
        return render(args);
    }
}
Responsive.propTypes = {
    xs: PropTypes.object,
    sm: PropTypes.object,
    md: PropTypes.object,
    lg: PropTypes.object,
    xl: PropTypes.object,
    render: PropTypes.func,
};
Responsive.defaultProps = {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
    render: () => null,
};
function mapState(state) {
    return {
        resolution: state.resolution,
    }
}
export default connect(mapState)(Responsive);