import React from 'react'

function FilterButton({item, filterResults}) {
  return (
    <button value={item.toLowerCase()} onClick={filterResults}>{item}</button>
  )
}

export default FilterButton