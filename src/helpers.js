import objectParser from 'dataobject-parser'
import _ from 'lodash'

export const editingWording = (
  count,
  name,
  singularEnding = 'a',
  pluralEnding = 'ów',
  pluralEnding2
) => {
  switch (count) {
    case 1:
      return `${count} ${name}${singularEnding}`
    case 2:
    case 3:
    case 4:
      return `${count} ${name}${pluralEnding2 || pluralEnding}`
    default:
      return `${count}  ${name}${singularEnding}`
  }
}

export const extractFormFieldsData = (columns, data) => {
  const formFields = columns.filter(x => x.formField).map(x => x.name)
  const formFieldsDataFlat = data.map(x => {
    let dataFields = {}
    formFields.forEach(y => {
      dataFields[y] = _.get(x, y)
    })
    return dataFields
  })
  return formFieldsDataFlat.map(x => {
    // console.log(x)
    // console.log(objectParser.transpose(x))
    objectParser.transpose(x)
    return x
  })
}
