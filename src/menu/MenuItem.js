import { compose, setDisplayName, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { MenuItem as MenuItemBase } from './Menu.style';
import { Ripple } from '../ripple';
import { proxyStyledStatics } from '../hocs';

export class MenuItem extends Component {
  state = {
    getTransitionDelay: () => 0,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      const {
        height,
      } = this.menuItem.parentNode.parentNode.getBoundingClientRect();
      const offsetTop = this.menuItem.offsetTop;
      const { height: itemHeight } = this.menuItem.getBoundingClientRect();
      const getTransitionDelay = nextProps.fadeDown
        ? (duration) => offsetTop / height * duration
        : (duration) => -(offsetTop + itemHeight - height) / height * duration;

      this.setState({ getTransitionDelay });
    }
  }

  render() {
    const { __StyledComponent__: Styled, ...props } = this.props;

    return (
      <Styled
        {...props}
        {...this.state}
        innerRef={(menuItem) => {
          this.menuItem = menuItem;
        }}
      >
        {props.children}
        <Ripple dark />
      </Styled>
    );
  }
}

const enhance = compose(
  proxyStyledStatics(MenuItemBase),
  setPropTypes({
    isVisible: PropTypes.bool,
    children: PropTypes.node,
  }),
  setDisplayName('MenuItem'),
);

export default enhance(MenuItem);
