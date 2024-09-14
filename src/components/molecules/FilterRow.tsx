// import { FiSearch } from 'react-icons/fi'
// import { SortSelect } from './SortSelect'
// import SearchBar from '../atom/SearchBar'
// import { BookDetailsTypes } from '@/types/commontypes';
// import { useFilteredData } from '@/hooks/useFilter';

// export interface IFilterRowProps{
//     data ?: BookDetailsTypes[]
// }

// const FilterRow: React.FC<IFilterRowProps> = ({data}) => {
    
//     const { filteredList, setSearchKey } = useFilteredData(data ?? []);

//   return (
//     <>
//     <div className='w-full flex justify-center'>
//         <SearchBar
//           type='text'
//           color='default'
//           icon={<FiSearch/>}
//           value={searchKey}
//           onChange={ e => setSearchKey(e.target.value)}
//           radius='soft'
//           placeholder='Search by title or author'
//         />
//       </div>
//       <div className='w-full flex justify-end'>
//         {/* <DropdownFormFilter onFilter={handleFilter}/> */}
//         <SortSelect/>
//       </div>
//     </>
//   )
// }

// export default FilterRow

import React from 'react'

const FilterRow = () => {
  return (
    <div>FilterRow</div>
  )
}

export default FilterRow