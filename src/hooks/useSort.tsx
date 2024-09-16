import { useState, useMemo } from 'react';
import { BookDetailsTypes, SortKeysType } from '@/types/commontypes';

// The hook now correctly accepts an array of BookDetailsTypes and SortKeysType
const useSort = (data: BookDetailsTypes[], sortKey: SortKeysType) => {
  const [sortedData, setSortedData] = useState<BookDetailsTypes[]>(data);

  useMemo(() => {
    if (!sortKey || !sortKey.key) {
      setSortedData(data); // If no sortKey is provided, return unsorted data
      return;
    }

    const sorted = [...data].sort((a, b) => {
      const key = sortKey.key.toLocaleLowerCase() as keyof BookDetailsTypes; // Ensure we're working with valid keys from BookDetailsTypes
      const sortOrder = sortKey.order;

      if (a[key] < b[key]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
  }, [data, sortKey]);

  return sortedData;
};

export default useSort;
