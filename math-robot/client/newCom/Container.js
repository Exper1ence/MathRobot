/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Responsive from './Responsive';
import View from './View';
import _ from './util';

const COL_PERCENTAGE = 100 / 12;

class Container extends Component {
    constructor(props) {
        super(props);
    }
    
    run({children, style, col, offset, push, pull, hidden, fixed, fluid,}) {
        if (fixed || !fluid) {
            return (
                <Responsive
                    xs={{width: '100%'}}
                    sm={{width: '540px'}}
                    md={{width: '720px'}}
                    lg={{width: '960px'}}
                    xl={{width: '1140px'}}
                    render={res => <View style={{...res, ...style}}>{children}</View>}
                />
            )
        }
        else {
            const all = {
                xs: {col: 12, offset: 0, push: 0, pull: 0},
                sm: {}, md: {}, lg: {}, xl: {},
            };
            _.forOwn(all, (res) => {
                Object.assign(res, {display: 'flex'});
            });
            _.forOwn({col, offset, push, pull}, (args, prop) => {
                for (let arg of args) {
                    arg = arg.split('-');
                    all[arg[0]][prop] = parseInt(arg[1]);
                }
            });
            for (let res of hidden) {
                all[res].display = 'none';
            }
            return (
                <Responsive
                    xs={all.xs}
                    sm={all.sm}
                    md={all.md}
                    lg={all.lg}
                    xl={all.xl}
                    render={({col, offset, push, pull, display,}) => {
                        return (
                            <View
                                style={{
                                    width: COL_PERCENTAGE * col + '%',
                                    marginRight: COL_PERCENTAGE * (pull - push) + '%',
                                    marginLeft: COL_PERCENTAGE * (offset + push - pull) + '%',
                                    display,
                                    ...style,
                                }}
                                onTouchCancel={() => {
                                    alert('cancel');
                                }}
                                onTouchEnd={() => {
                                    alert('end');
                                }}
                                onTouchMove={() => {
                                    alert('move');
                                }}
                                onTouchStart={() => {
                                    alert('start');
                                }}
                            >
                                {children}
                            </View>
                        )
                    }}
                />
            );
        }
    }
}
Container.propTypes = {
    col: PropTypes.array,
    offset: PropTypes.array,
    push: PropTypes.array,
    pull: PropTypes.array,
    hidden: PropTypes.array,
    fluid: PropTypes.bool,
    fixed: PropTypes.bool,
};
Container.defaultProps = {
    col: [],
    offset: [],
    push: [],
    pull: [],
    hidden: [],
    fluid: true,
};
export default Container;