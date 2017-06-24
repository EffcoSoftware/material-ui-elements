import React from 'react'
import { TableRow, TableCell } from 'material-ui/Table'
import Typography from 'material-ui/Typography'
import FormFieldRedux from '../MuiForm/elements/FormFieldRedux'
import RowActions from './RowActions'

const MuiTableRow = props => {
  const {
    row,
    index,
    hover,
    config: { header, data },
    disabled,
    onRowClick
  } = props

  return (
    <TableRow hover={hover}>
      {header.map((h, i) =>
        <TableCell
          key={i}
          numeric={h.numeric}
          compact={h.compact}
          disablePadding={h.disablePadding}
          onClick={() => onRowClick(i)}
          style={h.style}
        >
          {h.value
            ? <Typography>{h.value(data[index])}</Typography>
            : <FormFieldRedux
                type={h.type}
                name={`${row}.${h.name}`}
                disabled={disabled}
                options={h.options}
                numeric={h.numeric}
                validate={h.validate}
              />}
        </TableCell>
      )}
      {!disabled
        ? <TableCell
            compact
            disablePadding
            style={{ width: 1 }}
            key={header.length + 1}
          >
            <RowActions {...props} />
          </TableCell>
        : null}
    </TableRow>
  )
}

export default MuiTableRow
