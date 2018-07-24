import React from 'react'
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import Checkbox from 'material-ui/Checkbox'
import { controlStyle } from './constants'

const MuiCheckbox = props => {
  const {
    input,
    meta,
    disabled,
    label,
    iconButton,
    icon,
    checkedIcon,
    text,
    rows,
    required,
    onChange: onChangeFromField,
    value,
    style,
    margin
  } = props

  const localStyle = {
    checkedColor: 'rgb(244, 67, 54)',
    disabledColor: 'rgba(0, 0, 0, 0.87)'
  }
  console.log(props)
  const checkBoxValue = input ? !!input.value : !!value

  const checkboxComponent = !iconButton && (
    <Checkbox
      onChange={(e, v) => {
        console.log(v, e.target, e.target.value)
        input && input.onChange(v)
        if (onChangeFromField) {
          onChangeFromField(v)
        }
      }}
      // value={checkBoxValue}
      checked={checkBoxValue}
      icon={icon && <Icon>{icon} </Icon>}
      checkedIcon={checkedIcon && <Icon>{checkedIcon} </Icon>}
      color="primary"
    />
  )

  return (
    <FormControl
      margin={margin || 'normal'}
      error={!!(meta && meta.touched && meta.error)}
      rows={rows}
      fullWidth
      required={required}
      disabled={disabled}
    >
      <InputLabel shrink>{label}</InputLabel>
      <div style={{ marginBottom: 15 }} />

      {iconButton ? (
        <IconButton
          tooltip={iconButton.tooltip || ''} //?  value ? 'Tak' : 'Nie' : ''}
          disableTouchRipple={disabled}
          style={{
            ...controlStyle,
            ...style,
            color:
              (input ? input.value : value) === value
                ? localStyle.checkedColor
                : localStyle.disabledColor
          }}
          hoveredStyle={{ cursor: disabled ? 'auto' : 'pointer' }}
          onClick={e => {
            input && input.onChange(e.target.value)
          }}
          //   !disabled
          //     ? props.onClick ||
          //       (() => this.props.change('MuiForm', 'continuation', !value))
          //     : () => {
          //         return undefined
          //       }
          // }
        >
          <Icon>{iconButton.icon || 'block'}</Icon>
        </IconButton>
      ) : text ? (
        <FormControlLabel control={checkboxComponent} label={text} />
      ) : (
        checkboxComponent
      )}

      <FormHelperText>
        {meta && meta.touched && meta.error && meta.error}
      </FormHelperText>
    </FormControl>
  )
}

export default MuiCheckbox
