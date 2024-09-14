import { useMemo, useState } from 'react';
import { BookDetailsTypes } from '@/types/commontypes';

export const useFilteredData = (data: BookDetailsTypes[]) => {
  const [searchKey, setSearchKey] = useState<string>('');

  // Filter data based on the search key
  const filteredList = useMemo(() => {
    if (!searchKey) return data;

    const lowerCaseSearchKey = searchKey.toLowerCase();
    return data?.filter((item) => {
      const bookName = item?.title?.toLowerCase() || '';
      const authorName = item?.author?.toLowerCase() || '';
      return (
        bookName.includes(lowerCaseSearchKey) || authorName.includes(lowerCaseSearchKey)
      );
    });
  }, [searchKey, data]);

  return { filteredList, setSearchKey };
};

