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
