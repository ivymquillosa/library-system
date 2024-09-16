/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect, ReactNode } from 'react';
import apiClient from '@/services/api';
import { BookDetailsTypes, filterTypes, SortKeysType } from '@/types/commontypes';
import { useFilter } from '@/hooks/useFilter';
import { defaultFilterValue } from '@/types/menuItems';
import useSort from '@/hooks/useSort';

interface DataContextProps {
  data: BookDetailsTypes[];
  favoriteBooks: BookDetailsTypes[];
  finalFilteredData: BookDetailsTypes[];  
  sortKeys: SortKeysType;
  setSortKeys : (sortKeys: SortKeysType) => void;
  setSearchFilters: (searchFilters : filterTypes)=> void;
  toggleFavorite: (id: string) => void;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<BookDetailsTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortKey, setSortKeys] = useState<SortKeysType>({ key:'', order: 'asc' })
  const [searchFilters, setSearchFilters] = useState<filterTypes>(defaultFilterValue);

  // Fetch the data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/');
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to toggle favorite status of a book
  const toggleFavorite = (id: string) => {
    const updateBooks = data.map((book) =>
      book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
    );
    setData(updateBooks as BookDetailsTypes[]); // Update the state with the new array
  };

  // Favorite books filter
  const favoriteBooks = data.filter((book) => book.isFavorite);
  
  const filteredData = useFilter(data, searchFilters)

  const finalFilteredData =  useSort(filteredData, sortKey); 
  

  return (
    <DataContext.Provider
      value={{
        data,
        favoriteBooks,
        finalFilteredData,  
        sortKeys: sortKey,
        setSortKeys,
        setSearchFilters,
        toggleFavorite,
        loading,
        error
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
