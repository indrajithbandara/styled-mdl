import { compose, setPropTypes, setDisplayName, defaultProps } from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';
import omit from 'lodash/omit';

import { Input as BaseInput } from '../input';
import {
  ErrorMessage,
  HelperText,
  Input,
  Label,
  Textarea,
  TextfieldStyle,
} from './Textfield.style';
import { proxyStyledStatics } from '../hocs';

export class TextfieldBase extends BaseInput {
  render() {
    const { __StyledComponent__: Styled, ...props } = this.props;
    return (
      <Styled {...props}>
        <Label {...props} {...this.state}>
          {props.label}
        </Label>
        {props.multiLine ? (
          <Textarea
            {...omit(props, ['defaultValue'])}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        ) : (
          <Input
            {...omit(props, ['defaultValue'])}
            {...this.state}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        )}
        {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
        {props.helperText && <HelperText>{props.helperText}</HelperText>}
      </Styled>
    );
  }
}

const enhance = compose(
  proxyStyledStatics(TextfieldStyle),
  setDisplayName('Textfield'),
  setPropTypes({
    error: PropTypes.string,
    autoFocus: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    multiLine: PropTypes.bool,
  }),
  defaultProps({
    type: 'text',
  }),
);

export default enhance(TextfieldBase);
