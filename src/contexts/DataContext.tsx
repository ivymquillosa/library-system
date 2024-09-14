/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import apiClient from '@/services/api';
import { BookDetailsTypes } from '@/types/commontypes';

interface DataContextProps {
  data: BookDetailsTypes[];
  favoriteBooks: BookDetailsTypes[];
  filteredList: BookDetailsTypes[];
  
  toggleFavorite: (id: string) => void;
  setSearchKey: (key: string) => void;
  searchKey: string;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<BookDetailsTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchKey, setSearchKey] = useState<string>(''); // State for search key

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

  // Filtered list based on the search key
  const filteredList = useMemo(() => {
    if (!searchKey) return data;

    return data.filter((item) => {
      const bookName = item?.title?.toLowerCase() || '';
      const authorName = item?.author?.toLowerCase() || '';
      const lowerCaseSearchKey = searchKey.toLowerCase();

      return bookName.includes(lowerCaseSearchKey) || authorName.includes(lowerCaseSearchKey);
    });
  }, [searchKey, data]);

  return (
    <DataContext.Provider
      value={{
        data,
        favoriteBooks,
        filteredList, // Provide filtered list
        toggleFavorite,
        setSearchKey, // Provide function to set search key
        searchKey, // Provide the current search key
        loading,
        error
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
