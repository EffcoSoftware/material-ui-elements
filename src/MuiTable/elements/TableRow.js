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
    hideEditButtons
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
        if (h.contentHidden && h.contentHidden(value, data[index]))
          return <TableCell key={i} />
        if (fieldArray && h.formField) {
          return (
            <TableCell
              key={i}
              numeric={h.numeric}
              compact={h.compact}
              disablePadding={h.disablePadding}
              style={h.style}
              onClick={
                h.onClick && !fieldArray ? () => h.onClick(row.id) : null
              }
            >
              {h.formField ? (
                <FormFieldRedux
                  type={h.type}
                  name={`${fields.name}[${index}]${h.name ? '.' + h.name : ''}`}
                  disabled={!add && disabled}
                  options={h.options}
                  numeric={h.numeric}
                  validate={h.validate}
                  normalize={h.normalize}
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
              compact={h.compact}
              disablePadding={h.disablePadding}
              style={h.style}
              onClick={
                h.onClick && !fieldArray ? () => h.onClick(row.id) : null
              }
            >
              {h.component ? (
                h.component(value, data[index])
              ) : (
                <Typography>{value}</Typography>
              )}
            </TableCell>
          )
        }
      })}
      {fieldArray && !(!add && disabled) && !hideEditButtons ? (
        <TableCell
          compact
          disablePadding
          style={{ width: 1 }}
          key={columns.length + 1}
        >
          <RowActions {...props} />
        </TableCell>
      ) : null}
    </TableRow>
  )
}

export default MuiTableRow
