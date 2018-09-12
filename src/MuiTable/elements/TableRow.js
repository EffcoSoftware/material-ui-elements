import React from 'react'
import _ from 'lodash'
import { TableRow, TableCell } from 'material-ui/Table'
import Typography from 'material-ui/Typography'
import FormFieldRedux from '../../MuiForm/elements/FormFieldRedux'
import RowActions from './RowActions'

const MuiTableRow = props => {
  const {
    hover,
    row,
    onRowClick,
    columns,
    fieldArray,
    disabled,
    add,
    data,
    index,
    fields,
    hideEditButtons,
    forceShowEditButtons
  } = props

  return (
    <TableRow
      hover={hover}
      onClick={onRowClick && !fieldArray ? () => onRowClick(row.id) : null}
      style={{ cursor: onRowClick && !fieldArray ? 'pointer' : null }}
    >
      {columns.map((h, i) => {
        if (h.hidden) return null
        const value = _.get(data[index], h.name)
        const disabledValue =
          h.disabled !== undefined
            ? typeof h.disabled === 'function'
              ? h.disabled(value, data[index])
              : h.disabled
            : disabled

        const fieldName = h.formField
          ? `${fields.name}[${index}]${h.name ? '.' + h.name : ''}`
          : undefined

        if (h.contentHidden && h.contentHidden(value, data[index]))
          return <TableCell key={i} />
        if (fieldArray && h.formField) {
          return (
            <TableCell
              key={i}
              numeric={h.numeric}
              padding={h.padding || 'dense'}
              style={h.cellStyle}
              onClick={
                h.onClick && !fieldArray ? () => h.onClick(row.id) : null
              }
            >
              {h.formField ? (
                <FormFieldRedux
                  type={h.type}
                  name={fieldName} //`${fields.name}[${index}]${h.name ? '.' + h.name : ''}`}
                  margin={h.margin}
                  disabled={!add && disabledValue}
                  options={h.options}
                  numeric={h.numeric}
                  validate={
                    h.validate && _.partial(h.validate, _, _, _, fieldName)
                  }
                  normalize={h.normalize}
                  onChange={h.onChange}
                  cellStyle={h.cellStyle}
                  formControlStyle={h.formControlStyle}
                  inputStyle={h.inputStyle}
                />
              ) : (
                <Typography>{h.value ? h.value(data[i]) : data[i]}</Typography>
              )}
            </TableCell>
          )
        } else {
          return (
            <TableCell
              key={i}
              numeric={h.numeric}
              padding={h.padding || 'dense'}
              style={h.cellStyle}
              onClick={
                h.onClick && !fieldArray
                  ? () => h.onClick(row.id, data[index])
                  : null
              }
            >
              {h.component ? (
                h.component(value, data[index], index)
              ) : (
                <Typography>{value}</Typography>
              )}
            </TableCell>
          )
        }
      })}
      {fieldArray &&
      (!(!add && disabled) || forceShowEditButtons) &&
      !hideEditButtons ? (
        <TableCell padding="none" key={columns.length + 1}>
          <RowActions {...props} />
        </TableCell>
      ) : null}
    </TableRow>
  )
}

export default MuiTableRow
