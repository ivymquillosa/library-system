import { useState } from 'react';
import Button from "../atom/Button";
import InputFields from "../atom/InputFields";
import Checkbox from "../atom/Checkbox";
import { filterTypes } from '@/types/commontypes';
import { FiStar, FiCalendar, FiX } from 'react-icons/fi';
import ButtonIcon from '../atom/ButtonIcon';
import Select from '../atom/Select';
import { defaultFilterValue } from '@/types/menuItems';
import { useData } from '@/hooks/useFetchData';

interface FilterFormProps {
  onSubmit: (filters: filterTypes) => void;
}

function FilterForm({ onSubmit }: FilterFormProps) {
  const [searchKey, setSearchKey] = useState("");
  const [exactMatch, setExactMatch] = useState(false);
  const [author, setAuthor] = useState(true);
  const [publisher, setPublisher] = useState(true);
  const [rating, setRating] = useState('');
  const [yearRange, setYearRange] = useState({ start: 0, end: 2024 });
  const { setSearchFilters } = useData();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      searchKey,
      exactMatch,
      author,
      publisher,
      rating,
      yearRange,
    });

  };

  const handleYearChange = (key: 'start' | 'end', value: string) => {
    setYearRange(prev => ({
      ...prev,
      [key]: value,
    }));

  };

  const handleReset = () => {
    // Reset individual inputs back to their default values
    setSearchKey('');
    setExactMatch(false);
    setAuthor(true);
    setPublisher(true);
    setRating('');
    setYearRange({ start: 0, end: 2024 });

    // Optionally reset any global filters (if using useData or other context)
    setSearchFilters(defaultFilterValue);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Search Title Input */}
      <div>
        <div className='flex border border-primary-500 w-full rounded-sm items-center'>
          <InputFields
            className='border-none justify-start flex-1'
            placeholder='Search here'
            value={searchKey}
            onChange={ e => setSearchKey(e.target.value)}
          />
          <ButtonIcon
            variant='ghost'
            className={`hover:bg-transparent h-5 ${searchKey.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={()=> setSearchKey('')}
          >
            <FiX className='text-xs'/>
          </ButtonIcon>
        </div>
      </div>

      {/* Exact Matching Checkbox */}
      <div className='flex gap-4 '>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="exact-match"
            color='primary'
            checked={exactMatch}
            onCheckedChange={(checked) => setExactMatch(checked as boolean)}
          />
          <label htmlFor="exact-match" className="text-sm font-medium">
            Exact Matching
          </label>
        </div>

        {/* Exact Author Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="author"
            color='primary'
            checked={author}
            onCheckedChange={(checked) => setAuthor(checked as boolean)}
          />
          <label htmlFor="author" className="text-sm font-medium">
            Author
          </label>
        </div>

        {/* Exact Publisher Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="publisher"
            color='primary'
            checked={publisher}
            onCheckedChange={(checked) => setPublisher(checked as boolean)}
          />
          <label htmlFor="publisher" className="text-sm font-medium">
            Publisher
          </label>
        </div>

      </div>

      {/* Select Inputs */}
      <div className='flex gap-4'>
        <div className='w-1/2'>
          <p className='py-2'>Select Rating</p>
          <Select
            color = 'primary'
            radius = 'soft'
            icon= {<FiStar/>}
            className='w-full'
            value={rating || ''}
            onValueChange={setRating} 
            placeHolder = 'Select a rating'
            selectOptions = {[
              { id: '5', label: '5', value: '5' },
              { id: '4', label: '4', value: '4' },
              { id: '3', label: '3', value: '3' },
              { id: '2', label: '2', value: '2' },
              { id: '1', label: '1', value: '1' },
              { id: '0', label: '0', value: '0' }
            ]}
          />
        </div>

        <div className='w-1/2'>
          <p className='py-2'>Select Range</p>
          <div className='flex w-full gap-2'>
        
            {/* From */}
            <Select
              color='primary'
              radius='soft'
              icon={<FiCalendar />}
              className='flex-1'
              onValueChange={(value) => handleYearChange('start', value)}
              placeHolder='From'
              selectOptions={[
                { id: '2025', label: '2025', value: '2025' },
                { id: '2020', label: '2020', value: '2020' },
                { id: '2015', label: '2015', value: '2015' },
                { id: '2010', label: '2010', value: '2010' },
                { id: '2005', label: '2005', value: '2005' },
                { id: '2000', label: '2000', value: '2000' },
                { id: '1995', label: '1995', value: '1995' },
                { id: '1990', label: '1990', value: '1990' },
                { id: '1985', label: '1985', value: '1985' },
                { id: '1980', label: '1980', value: '1980' },
              ]}
            />

            {/* To */}
            <Select
              color='primary'
              radius='soft'
              icon={<FiCalendar />}
              className='flex-1'
              onValueChange={(value) => handleYearChange('end', value)}
              placeHolder='To'
              selectOptions={[
                { id: '2025', label: '2025', value: '2025' },
                { id: '2020', label: '2020', value: '2020' },
                { id: '2015', label: '2015', value: '2015' },
                { id: '2010', label: '2010', value: '2010' },
                { id: '2005', label: '2005', value: '2005' },
                { id: '2000', label: '2000', value: '2000' },
                { id: '1995', label: '1995', value: '1995' },
                { id: '1990', label: '1990', value: '1990' },
                { id: '1985', label: '1985', value: '1985' },
                { id: '1980', label: '1980', value: '1980' },
              ]}
            />
          </div>
        </div>
      </div>
        
      {/* Buttons */}
      <div className='flex gap-4 justify-end'>
        <Button radius='soft' onClick={handleReset} variant='ghost' color='default'>Reset Filter</Button>
        <Button radius='soft' type="submit">Filter</Button>
      </div>
    </form>
  );
}

export default FilterForm;
