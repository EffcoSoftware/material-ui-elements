import objectParser from 'dataobject-parser'
import _ from 'lodash'
import width from 'text-width'

export const editingWording = (
  count,
  name,
  singularEnding = 'a',
  pluralEnding = 'ów',
  pluralEnding2,
  zeroEnding = 'ów'
) => {
  const wording = `${count} ${name}`

  switch (count) {
    case 0:
      return `${wording}${zeroEnding}`
    case 1:
      return `${wording}${singularEnding}`
    case 2:
    case 3:
    case 4:
      return `${wording}${pluralEnding2 || pluralEnding}`
    default:
      return `${wording}${pluralEnding}`
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

export const calculateTextWidth = (
  title = null,
  maxChars = null,
  defaultWidth = 100,
  config
) => {
  const widthTitle = width(title || '', config)
  const widthChars = maxChars
    ? width(
        Array(maxChars)
          .fill('w')
          .join(''),
        config
      )
    : 0

  return widthTitle >= widthChars
    ? widthTitle + config.extraWidth
    : widthChars > 0 ? widthChars + config.extraWidth : defaultWidth
}
