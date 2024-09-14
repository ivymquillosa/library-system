import React from 'react';
import InputFields, { IInputProps } from '../atom/InputFields';
import { useData } from '@/hooks/useFetchData';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import { FiX } from 'react-icons/fi';
import { BookDetailsTypes } from '@/types/commontypes';

export interface ISearchBarProps extends IInputProps {
    data?: BookDetailsTypes[]
}

const SearchBar: React.FC<ISearchBarProps> = ({data = [], ...props}) => {
    const { searchKey, setSearchKey } = useData();

  return (
    <div className='flex flex-col'>
        <div className='w-fit text-xs px-5 font-semibold py-1.5 border text-primary-500 rounded-t-sm mx-1 -mb-px border-primary-500'>
            {`${data.length} BOOKS`}
        </div>
        <div className='flex border border-primary-500 w-fit rounded-sm items-center'>
            <InputFields
                className='border-none w-80 justify-start'
                value={searchKey}
                onChange={ e => setSearchKey(e.target.value)}
                {...props}
            />
            <ButtonIcon
                variant='ghost'
                className={`hover:bg-transparent ${searchKey.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={()=> setSearchKey('')}
            >
                <FiX/>
            </ButtonIcon>
            <Button className='text-white text-sm py-3'>FILTER</Button>
        </div>  
    </div>
  )
}

SearchBar.displayName = 'SearchBar'; // Set a display name for better debugging

export default SearchBar;
