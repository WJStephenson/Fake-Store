//this button component is used in the filter component

function FilterButton({item, filterResults}) {
  return (
    <button value={item.toLowerCase()} onClick={filterResults}>{item}</button>
  )
}

export default FilterButton