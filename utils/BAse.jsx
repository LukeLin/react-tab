import React, { PropTypes, Component } from 'react';
import shallowEqual from './shallowEqual';


export default class Base extends Component {
    constructor(props, context){
        super(props, context);
    }

    /**
     * 检验组件更新
     * @param nextProps
     * @param nextState
     * @returns {*}
     */
    shouldComponentUpdate(nextProps, nextState){
        let shouldUpdate = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);

        if(shouldUpdate && process.env.NODE_ENV !== 'production') {
            console.log('Component: ' + this._reactInternalInstance.getName() + ' will update');
        }

        return shouldUpdate;
    }
}
