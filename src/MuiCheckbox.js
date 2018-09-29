import React from 'react'
import _ from 'lodash'
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import Tooltip from 'material-ui/Tooltip'
import Icon from 'material-ui/Icon'
import Checkbox from 'material-ui/Checkbox'

const MuiCheckbox = props => {
  const {
    input,
    meta,
    disabled,
    label,
    iconButton,
    icon,
    checkedIcon,
    indeterminate,
    indeterminateIcon,
    text,
    disableRipple,
    tooltip,
    tooltipPlacement,
    rows,
    required,
    onChange: onChangeFromField,
    value,
    style,
    margin,
    compact,
    checkBoxStyle,
    ...rest
  } = props

  const palette = rest && rest.theme && rest.theme.palette

  const localStyle = {
    checkedColor: (palette && palette.primary1Color) || 'rgb(244, 67, 54)',
    disabledColor: (palette && palette.disabledColor) || 'rgb(97, 97, 97)'
  }

  const checkBoxValue = input ? !!input.value : !!value

  const checkboxComponent = !iconButton && (
    <Tooltip
      disableHoverListener={true}
      disableFocusListener={true}
      disableTouchListener={true}
      PopperProps={{
        style: {
          position: 'relative',
          transform: 'translate3d(0px, -15px, 0px)',
          textAlign: 'center'
        }
      }}
      style={{ height: 48 }}
      title={
        tooltip
          ? _.isString(tooltip)
            ? tooltip
            : checkBoxValue
              ? 'Tak'
              : 'Nie'
          : ''
      }
      placement={tooltipPlacement || 'bottom-start'}
    >
      <div>
        <Checkbox
          style={{
            color: checkBoxValue
              ? localStyle.checkedColor
              : localStyle.disabledColor,
            ...style
          }}
          onChange={(e, v) => {
            input && input.onChange(v)
            if (onChangeFromField) {
              onChangeFromField(v)
            }
          }}
          // value={checkBoxValue}
          checked={checkBoxValue}
          icon={icon && <Icon>{icon} </Icon>}
          checkedIcon={
            checkedIcon ? (
              <Icon>{checkedIcon} </Icon>
            ) : (
              icon && <Icon>{icon} </Icon>
            )
          }
          indeterminateIcon={
            indeterminateIcon && <Icon>{indeterminateIcon} </Icon>
          }
          indeterminate={indeterminate}
          disableRipple={disableRipple}
          color="primary"
        />
      </div>
    </Tooltip>
  )

  return (
    <FormControl
      margin={margin || 'normal'}
      error={!!(meta && meta.touched && meta.error)}
      rows={rows}
      fullWidth
      required={required}
      disabled={disabled}
      style={
        checkBoxStyle || {
          alignItems: 'center'
        }
      }
    >
      <InputLabel shrink>{label}</InputLabel>
      {!compact && <div style={{ marginBottom: 15 }} />}

      {text ? (
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
