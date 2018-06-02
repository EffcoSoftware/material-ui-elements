import React from 'react'
import _ from 'lodash'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
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
      style={{
        cursor: onRowClick && !fieldArray ? 'pointer' : null,
        borderStyle: fieldArray && 'hidden'
      }}
    >
      {columns.map((c, i) => {
        if (c.hidden) return null
        const hideLabel = c.hideLabel !== undefined ? c.hideLabel : true
        const value = _.get(data[index], c.name)
        const disabledValue =
          c.disabled !== undefined
            ? typeof c.disabled === 'function'
              ? c.disabled(value, data[index])
              : c.disabled
            : disabled

        if (c.contentHidden && c.contentHidden(value, data[index]))
          return <TableCell key={i} />
        if (fieldArray && c.formField) {
          return (
            <TableCell
              key={i}
              padding={c.padding || 'dense'}
              numeric={c.numeric}
              style={c.style}
              onClick={
                c.onClick && !fieldArray ? () => c.onClick(row.id, value) : null
              }
            >
              {c.formField ? (
                <FormFieldRedux
                  type={c.type}
                  margin={c.margin || 'none'}
                  name={`${fields.name}[${index}]${c.name ? '.' + c.name : ''}`}
                  disabled={!add && disabledValue}
                  options={c.options}
                  numeric={c.numeric}
                  validate={c.validate}
                  normalize={c.normalize}
                  locale={c.locale}
                  cancelLabel={c.cancelLabel}
                  onChange={c.input && c.input.onChange}
                  customItem={c.customItem}
                  hideLabel={hideLabel}
                />
              ) : (
                <Typography>{c.value ? c.value(data[i]) : data[i]}</Typography>
              )}
            </TableCell>
          )
        } else {
          return (
            <TableCell
              key={i}
              margin={c.margin || 'none'}
              numeric={c.numeric}
              style={c.style}
              onClick={
                c.onClick && !fieldArray ? () => c.onClick(row.id, value) : null
              }
            >
              {c.component ? (
                c.component(value, data[index])
              ) : (
                <Typography nowrap={c.nowrap}>{value}</Typography>
              )}
            </TableCell>
          )
        }
      })}
      {fieldArray &&
      (!(!add && disabled) || forceShowEditButtons) &&
      !hideEditButtons ? (
        <TableCell margin="none" style={{ width: 1 }} key={columns.length + 1}>
          <RowActions {...props} />
        </TableCell>
      ) : null}
    </TableRow>
  )
}

export default MuiTableRow
