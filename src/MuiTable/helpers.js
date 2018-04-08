import _ from 'lodash'

export const getDetails = (data, detailsRow) => {
  let tableDataWithDetails = []

  if (detailsRow) {
    tableDataWithDetails = data.reduce((result, dataRow, i) => {
      const newOffsetIndex =
        result.length - _.filter(result, ['detailRow', true]).length
      if (
        detailsRow &&
        detailsRow.hasDetailsRow &&
        detailsRow.hasDetailsRow(data, dataRow)
      ) {
        return (
          result.push(
            { ...dataRow, newOffsetIndex },
            {
              detailRow: true,
              component:
                detailsRow &&
                detailsRow.component &&
                detailsRow.component(data, dataRow)
            }
          ) && result
        )
      } else {
        return result.push({ ...dataRow, newOffsetIndex }) && result
      }
    }, [])
  }

  return tableDataWithDetails
}
