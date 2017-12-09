import React from 'react'
import MuiTextField from '../../MuiTextfield'

const Search = ({ lang, filterString, filterChange, filterBy, fieldArray }) => {
  if (!filterBy || fieldArray) return null
  return (
    <div style={{ display: 'flex', marginRight: 24 }}>
      <MuiTextField
        value={filterString}
        hint={lang === 'pl' ? 'Wyszukaj' : 'Search'}
        style={{ padding: 0 }}
        onChange={(e, v) => filterChange(v)}
      />
    </div>
  )
}

export default Search
