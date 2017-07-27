import React from 'react'
import _ from 'lodash'
import { TableRow, TableCell } from 'material-ui/Table'
import Typography from 'material-ui/Typography'
import FormFieldRedux from '../../MuiForm/elements/FormFieldRedux'

const MuiTableRow = props => {
  const {
    selected,
    hover,
    row,
    onRowClick,
    columns,
    fieldArray,
    disabled,
    data,
    index
  } = props
  return (
    <TableRow
      hover={hover}
      selected={row.id === selected}
      onClick={onRowClick && !fieldArray ? () => onRowClick(row.id) : null}
      style={{ cursor: onRowClick && !fieldArray ? 'pointer' : null }}
    >
      {columns.map((h, i) => {
        if (fieldArray && h.formField) {
          return (
            <TableCell
              key={i}
              numeric={h.numeric}
              compact={h.compact}
              disablePadding={h.disablePadding}
              style={h.style}
            >
              {h.value
                ? <Typography>
                    {h.value(data[i])}
                  </Typography>
                : <FormFieldRedux
                    type={h.type}
                    name={`${h.name}[${index}]`}
                    disabled={disabled}
                    options={h.options}
                    numeric={h.numeric}
                    validate={h.validate}
                    normalize={h.normalize}
                  />}
            </TableCell>
          )
        } else {
          const value = _.get(row, h.name)
          return (
            <TableCell
              key={i}
              numeric={h.numeric}
              compact={h.compact}
              disablePadding={h.disablePadding}
              style={h.style}
            >
              {h.component
                ? h.component(value)
                : <Typography>
                    {value}
                  </Typography>}
            </TableCell>
          )
        }
      })}
    </TableRow>
  )
}

export default MuiTableRow
