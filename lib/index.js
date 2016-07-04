'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabPanel = exports.TabTitle = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Tabs extends _react.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedTab: null
        };

        this.firstTabLabel = null;
    }

    getChildContext() {
        return {
            onSelect: this.onSelect.bind(this),
            selectedTab: this.state.selectedTab || this.props.defaultSelectedTab,
            activeStyle: this.props.activeLinkStyle || defaultActiveStyle,
            firstTabLabel: this.firstTabLabel
        };
    }

    onSelect(tab, ...rest) {
        if (this.state.selectedTab === tab) return;

        this.setState({
            selectedTab: tab
        });

        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(tab, ...rest);
        }
    }

    findFirstTabLabel(children) {
        if (typeof children !== 'object' || this.firstTabLabel) {
            return;
        }

        _react2.default.Children.forEach(children, child => {
            if (child.props && child.props.label) {
                if (this.firstTabLabel == null) {
                    this.firstTabLabel = child.props.label;
                    return;
                }
            }

            this.findFirstTabLabel(child.props && child.props.children);
        });
    }

    render() {
        this.findFirstTabLabel(this.props.children);

        return _react2.default.createElement(
            'div',
            { className: this.props.className, style: this.props.style },
            this.props.children
        );
    }
}
exports.default = Tabs;
Tabs.defaultProps = {
    onSelect: null,
    activeLinkStyle: null,
    defaultSelectedTab: '',
    className: '',
    style: null
};
Tabs.propTypes = {
    onSelect: _react.PropTypes.func,
    activeLinkStyle: _react.PropTypes.object,
    defaultSelectedTab: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
};
Tabs.childContextTypes = {
    onSelect: _react.PropTypes.func,
    selectedTab: _react.PropTypes.string,
    activeStyle: _react.PropTypes.object,
    firstTabLabel: _react.PropTypes.string
};

const defaultActiveStyle = {
    fontWeight: 'bold'
};

class TabTitle extends _react.Component {
    constructor(props, context) {
        super(props, context);

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        this.context.onSelect(this.props.label);
    }

    componentDidMount() {
        if (this.context.selectedTab === this.props.label || this.context.firstTabLabel === this.props.label) {
            this.context.onSelect(this.props.label);
        }
    }

    render() {
        let style = null;
        let isActive = this.context.selectedTab === this.props.label;
        if (isActive) {
            style = this.context.activeStyle;
        }

        return _react2.default.createElement(
            'div',
            {
                className: this.props.className + (isActive ? ' active' : ''),
                style: style,
                onClick: this.onSelect
            },
            this.props.children
        );
    }
}
exports.TabTitle = TabTitle;
TabTitle.defaultProps = {
    label: '',
    className: 'tab-link'
};
TabTitle.propTypes = {
    label: _react.PropTypes.string.isRequired,
    className: _react.PropTypes.string
};
TabTitle.contextTypes = {
    onSelect: _react.PropTypes.func,
    firstTabLabel: _react.PropTypes.string,
    activeStyle: _react.PropTypes.object,
    selectedTab: _react.PropTypes.string
};

const styles = {
    visible: {
        display: 'block'
    },
    hidden: {
        display: 'none'
    }
};

class TabPanel extends _react.Component {
    constructor(props, context) {
        super(props, context);

        for (let style in styles) {
            if (styles.hasOwnProperty(style)) {
                (0, _assign2.default)(styles[style], this.props.style);
            }
        }
    }

    render() {
        let displayStyle = this.context.selectedTab === this.props.for ? styles.visible : styles.hidden;

        return _react2.default.createElement(
            'div',
            {
                className: this.props.className,
                style: displayStyle },
            this.props.children
        );
    }
}
exports.TabPanel = TabPanel;
TabPanel.defaultProps = {
    for: '',
    className: 'tab-content',
    style: null
};
TabPanel.propTypes = {
    for: _react.PropTypes.string.isRequired,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
};
TabPanel.contextTypes = {
    selectedTab: _react.PropTypes.string
};
