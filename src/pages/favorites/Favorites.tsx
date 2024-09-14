import SearchBar from '@/components/atom/SearchBar';
import { SortSelect } from '@/components/molecules/SortSelect';
import CardBookPreview from '@/components/organisms/CardBookPreview';
import { useData } from '@/hooks/useFetchData';
import { useFilteredData } from '@/hooks/useFilter';
import { FiSearch } from 'react-icons/fi';

const Favorites = () => {
  const { loading, favoriteBooks, toggleFavorite } = useData();
  const { filteredList } = useFilteredData(favoriteBooks);

  return (
    <div className='flex flex-col gap-5 p-10 pt-36'>
      <div className='w-full flex justify-center'>
        <SearchBar
          data={favoriteBooks}
          type='text'
          color='default'
          icon={<FiSearch/>}
          radius='soft'
          placeholder='Search by title or author'
        />
      </div>
      <div className='w-full flex justify-end'>
        <SortSelect/>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 min-h-[calc(100vh-00px)]'>
        {filteredList?.length === 0 && !loading ? 
        <div className='text-center w-full text-default-500'>No Results Found</div> : 
        filteredList?.map((d, index) => (
          <CardBookPreview
            key={index}
            cardData={d}
            onClickToggle={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites