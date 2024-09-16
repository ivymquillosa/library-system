import { useMemo } from 'react';
import { BookDetailsTypes, filterTypes } from '@/types/commontypes';

export const useFilter = (data: BookDetailsTypes[], filters: filterTypes) => {
  const { searchKey, exactMatch, author, publisher, rating, yearRange } = filters;
  const lowerCaseSearchKey = searchKey.toLowerCase();

  // Helper function to check if a string contains an exact word
  const containsExactWord = (text: string, word: string) => {
    if (!word) return true;
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(text);
  };

  const filteredList = useMemo(() => {
    if (!data) return [];

    return data.filter((item) => {
      const {
        title = '',
        author: bookAuthor = '',
        publisher: bookPublisher = '',
        rating: bookRating = '',
        releaseDate = '',
      } = item;

      const bookTitle = title.toLowerCase();
      const lowerCaseBookAuthor = author ? bookAuthor.toLowerCase() : '';
      const lowerCaseBookPublisher = publisher ? bookPublisher.toLowerCase() : '';

      // Search key matching
      const matchSearch = exactMatch 
        ? containsExactWord(bookTitle, lowerCaseSearchKey)
          || (author && containsExactWord(lowerCaseBookAuthor, lowerCaseSearchKey))
          || (publisher && containsExactWord(lowerCaseBookPublisher, lowerCaseSearchKey))
        : bookTitle.includes(lowerCaseSearchKey)
          || (author && lowerCaseBookAuthor.includes(lowerCaseSearchKey))
          || (publisher && lowerCaseBookPublisher.includes(lowerCaseSearchKey));

      // Rating filter
      const matchRating = rating === '' || rating === null || rating === undefined || (bookRating.toString().trim() === rating.trim());

      // Year filter
      // Year filter with range (convert releaseDate to number)
      const releaseYear = parseInt(releaseDate);
      const startYear = yearRange.start  || null;
      const endYear = yearRange.end || null;

      const matchYear = (!startYear || releaseYear >= startYear) && (!endYear || releaseYear <= endYear);


      return matchSearch && matchRating && matchYear;
    });
  }, [data, lowerCaseSearchKey, exactMatch, author, publisher, rating, yearRange]);

  return filteredList;
};
