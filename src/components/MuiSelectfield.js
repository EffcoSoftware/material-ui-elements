import React from 'react';
import { SelectField } from 'material-ui-effco';

export default ({ field, disabled, style, hintText, floatingLabelText, children, onChange, multiple }) => (
  <SelectField
    {...field}
    onChange={onChange}
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    fullWidth
    errorText={field.touched && field.error && field.error}
    disabled={disabled}
    style={style}
    underlineDisabledStyle={{ borderColor: '#ccc' }}
    hintStyle={{ color: '#bbb' }}
    children={children}
    floatingLabelFixed
    multiple={multiple}
  />
);
