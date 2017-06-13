import React from 'react'
import MuiTextField from '../MuiTextfield'

const Search = ({ search, searchChange, filter }) => {
  if (!filter) return null
  return (
    <div style={{ display: 'flex' }}>
      <MuiTextField
        value={search}
        hintText="Search"
        style={{ padding: 0 }}
        onChange={searchChange}
      />
      {/*<IconButton>
        <Icon>close</Icon>
      </IconButton>*/}
    </div>
  )
}

export default Search
