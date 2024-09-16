import SearchBar from '@/components/atom/SearchBar';
import CardBookPreview from '@/components/organisms/CardBookPreview';
import { useData } from '@/hooks/useFetchData';
import { FiSearch } from 'react-icons/fi';
import { useMemo } from 'react';
import { SortDropdown } from '@/components/molecules/SortDropdown';

const Favorites = () => {
  const { data, finalFilteredData, loading, toggleFavorite } = useData();

  // Memoize favoriteBooks to avoid unnecessary recalculations
  const favoriteBooks = useMemo(() => 
    finalFilteredData.filter((book) => book.isFavorite), [finalFilteredData]
  );

  return (
    <div className='flex flex-col gap-5 p-10 pt-36'>
      <div className='w-full flex justify-center'>
        <SearchBar
          data={data}
          type='text'
          color='default'
          icon={<FiSearch />}
          radius='soft'
          placeholder='Search by title or author'
        />
      </div>
      <div className='w-full flex justify-end'>
        <SortDropdown/>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 min-h-[calc(100vh-100px)]'>
        {!loading && favoriteBooks.length === 0 ? (
          <div className='text-center w-full text-default-500'>
            No Results Found
          </div>
        ) : (
          favoriteBooks.map((book) => (
            <CardBookPreview
              key={book.id} // Use a unique key
              cardData={book}
              onClickToggle={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
