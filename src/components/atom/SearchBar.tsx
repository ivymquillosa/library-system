import React, { useEffect, useState } from 'react';
import InputFields, { IInputProps } from '../atom/InputFields';
import { useData } from '@/hooks/useFetchData';
import Button from './Button';
import ButtonIcon from './ButtonIcon';
import { FiX } from 'react-icons/fi';
import { BookDetailsTypes, filterTypes } from '@/types/commontypes';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import FilterForm from '../organisms/FilterForm';

export interface ISearchBarProps extends IInputProps {
    data?: BookDetailsTypes[];
}

const SearchBar: React.FC<ISearchBarProps> = ({ data = [], ...props }) => {
    const [upperSearchKey, setUpperSearchKey] = useState<filterTypes['searchKey']>('');
    const { setSearchFilters } = useData();

    // Filters when upper Search bar Key changes
    useEffect(() => {
        setSearchFilters(prevFilters => ({
            ...prevFilters,
            searchKey: upperSearchKey,  
        }));
    }, [upperSearchKey, setSearchFilters]);


    const handleFilterSubmit = (filters: filterTypes) => {
        setSearchFilters({
            ...filters,
        });
    };

    return (
        <div className='flex flex-col'>
            <div className='w-fit text-xs px-5 font-semibold py-1.5 border text-primary-500 rounded-t-sm mx-1 -mb-px border-primary-500'>
                {`${data.length} BOOKS`}
            </div>
            <div className='flex border border-primary-500 w-fit rounded-sm items-center'>
                <InputFields
                    className='border-none w-80 justify-start'
                    value={upperSearchKey}
                    onChange={e => setUpperSearchKey(e.target.value)}
                    {...props}
                />
                <ButtonIcon
                    variant='ghost'
                    className={`hover:bg-transparent ${upperSearchKey.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setUpperSearchKey('')}
                >
                    <FiX />
                </ButtonIcon>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className='text-white text-sm py-3'>FILTER</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[440px] p-4"
                        style={{ position: 'absolute', top: '100%', right: -42, transform: 'translateY(4px)' }}
                    >
                        <FilterForm
                            onSubmit={handleFilterSubmit}
                        />
                    </PopoverContent>
                </Popover>
            </div>  
        </div>
    );
};

SearchBar.displayName = 'SearchBar';
export default SearchBar;
