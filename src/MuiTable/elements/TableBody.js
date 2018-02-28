import React from 'react'
import _ from 'lodash'
import { TableBody, TableRow, TableCell } from 'material-ui/Table'
import MuiTableRow from './TableRow'

const Body = props => {
  const {
    data,
    fields,
    handleRowClick,
    fieldArray,
    detailsRow,
    columns
  } = props

  if (!data) return null

  const tableData = fieldArray ? fields : data
  let tableDataWithDetails = []

  if (detailsRow) {
    const { detailsArray, titleText, reducedProp } = detailsRow

    tableDataWithDetails = data.reduce((result, dataRow) => {
      const newOffsetIndex =
        result.length - _.filter(result, ['detailRow', true]).length
      if (!_.isEmpty(dataRow[detailsArray])) {
        return (
          result.push(
            { ...dataRow, newOffsetIndex },
            {
              detailRow: true,
              value: dataRow[detailsArray].reduce((r, e, i) => {
                return i === 0
                  ? `${titleText}${e[reducedProp]}`
                  : `${r}, ${e[reducedProp]}`
              }, '')
            }
          ) && result
        )
      } else {
        return result.push({ ...dataRow, newOffsetIndex }) && result
      }
    }, [])
  }

  return (
    <TableBody>
      {!detailsRow
        ? tableData.map((row, i) => (
            <MuiTableRow
              key={i}
              index={i}
              row={row}
              hover
              onRowClick={handleRowClick ? () => handleRowClick(row.id) : null}
              {...props}
            />
          ))
        : tableDataWithDetails.map((row, i) => {
            return !row.detailRow ? (
              <MuiTableRow
                key={i}
                index={row.newOffsetIndex}
                row={row} //`${detailsRow}[${i}]`}
                hover
                onRowClick={
                  handleRowClick ? () => handleRowClick(row.id) : null
                }
                {...props}
              />
            ) : (
              <TableRow
                style={
                  detailsRow.rowStyles
                    ? { ...detailsRow.rowStyles }
                    : { background: '#eee' }
                }
              >
                <TableCell key={i} colSpan={columns.length + 1}>
                  {row.value}
                </TableCell>
              </TableRow>
            )
          })}
    </TableBody>
  )
}

export default Body
