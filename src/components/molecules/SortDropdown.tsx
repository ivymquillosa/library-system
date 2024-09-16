import NestedDropdown from "../atom/DropdownMenu";

const menuItems = [
  {
    label: 'File',
    subItems: [
      { label: 'New', action: () => console.log('New File') },
      { label: 'Open', action: () => console.log('Open File') },
    ],
  },
  {
    label: 'Edit',
    subItems: [
      { label: 'Undo', action: () => console.log('Undo') },
      { label: 'Redo', action: () => console.log('Redo') },
    ],
  },
  { label: 'Save', action: () => console.log('Save File') },
];

export function SortDropdown() {
  return ( <NestedDropdown label="Menu" items={menuItems} />
    // <Select
    //   color = 'primary'
    //   radius = 'soft'
    //   className='w-full'
    //   selectPrefix="Sort by:"
    //   placeHolder = 'Select a rating'
    //   selectOptions = {[
    //     { id: 'title', label: 'Title', value: 'title' },
    //     { id: 'author', label: 'Author', value: 'author' },
    //     { id: 'publisher', label: 'Publisher', value: 'publisher' },
    //     { id: 'ratings', label: 'Ratings', value: 'ratings' },
    //     { id: 'released', label: 'Released Date', value: 'released' },
    //     { id: 'pages', label: 'Number of Pages', value: 'pages' }
    //   ]}
    // />
  )
}
