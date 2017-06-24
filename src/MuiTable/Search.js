import React from 'react'
import MuiTextField from '../MuiTextfield'

const Search = ({ filterString, filterChange, filterBy }) => {
  if (!filterBy) return null
  return (
    <div style={{ display: 'flex' }}>
      <MuiTextField
        value={filterString}
        hintText="Search"
        style={{ padding: 0 }}
        onChange={filterChange}
      />
    </div>
  )
}

export default Search
