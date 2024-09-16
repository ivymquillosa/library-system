import { useData } from '@/hooks/useFetchData';
import { FiSearch } from 'react-icons/fi';
import SearchBar from '@/components/atom/SearchBar';
import { SortSelect } from '@/components/molecules/SortSelect';
import CardBookPreview from '@/components/organisms/CardBookPreview';
import { SortDropdown } from '@/components/molecules/SortDropdown';

const BookList = () => {
  const { data, finalFilteredData, loading, toggleFavorite } = useData();
  return (
    <div className='flex flex-col gap-5 p-10 pt-36'>
      <div className='w-full flex justify-center'>
        <SearchBar
          data={data}
          type='text'
          color='default'
          icon={<FiSearch/>}
          
          radius='soft'
          placeholder='Search by title or author'
        />
      </div>
      <div className='w-full flex justify-end'>
        <SortSelect/>
        <SortDropdown/>
      </div>
      <div>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 min-h-[calc(100vh-00px)]'>
        {finalFilteredData?.length === 0 && !loading ? 
        <div className='text-center w-full text-default-500'>No Results Found</div> : 
        finalFilteredData?.map((d, index) => (
          <CardBookPreview
            key={index}
            cardData={d}
            onClickToggle={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
