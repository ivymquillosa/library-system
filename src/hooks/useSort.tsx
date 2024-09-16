import { useState, useMemo } from 'react';

type SortOrder = 'asc' | 'desc';

function useSort<T>(data: T[], sortKey: keyof T, sortOrder: SortOrder = 'asc') {
  const [sortedData, setSortedData] = useState<T[]>(data);

  useMemo(() => {
    if (!sortKey) {
      setSortedData(data); // If no sortKey, return unsorted data
      return;
    }

    const sorted = [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
  }, [data, sortKey, sortOrder]);

  return sortedData;
}

export default useSort;
