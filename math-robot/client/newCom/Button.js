/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import View from './View';
import Semantic from './Semantic';
import {propTypes, defaultProps} from './types';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {brightness: 100};
    }
    
    run({children, style,}, {brightness}) {
        return (
            <Semantic {...this.props}
                      render={({color, backgroundColor, borderColor}) => (
                          <View
                              style={{
                                  cursor: 'pointer',
                                  padding: '.5rem 1rem',
                                  border: '1px solid',
                                  color,
                                  borderColor,
                                  backgroundColor,
                                  borderRadius: '.25rem',
                                  fontWeight: 'bold',
                                  filter: `brightness(${brightness}%)`,
                              }}
                              onMouseEnter={() => this.setState({brightness: 85})}
                              onMouseOut={() => this.setState({brightness: 100})}
                          >
                              {children}
                          </View>
                      )}
            />
        )
    }
}
Button.propTypes = propTypes.semantic;
Button.defaultProps = defaultProps.semantic;
export default Button;