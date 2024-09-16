import Select from "../atom/Select";

export function SortSelect() {
  return (
    <Select
      color = 'primary'
      radius = 'soft'
      className='w-full'
      selectPrefix="Sort by:"
      placeHolder = 'Select a rating'
      selectOptions = {[
        { id: 'title', label: 'Title', value: 'title' },
        { id: 'author', label: 'Author', value: 'author' },
        { id: 'publisher', label: 'Publisher', value: 'publisher' },
        { id: 'ratings', label: 'Ratings', value: 'ratings' },
        { id: 'released', label: 'Released Date', value: 'released' },
        { id: 'pages', label: 'Number of Pages', value: 'pages' }
      ]}
    />
  )
}
