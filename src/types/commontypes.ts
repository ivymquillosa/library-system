/* eslint-disable @typescript-eslint/no-explicit-any */

export type commonTypes = {
    variant?: 'fill' | 'outline' | 'ghost'
    color?:
      | 'primary'
      | 'secondary'
      | 'error'
      | 'warning'
      | 'success'
      | 'info'
      | 'default'
    size?: 'sm' | 'base' | 'lg' | 'xl'
    radius?: 'none' | 'soft' | 'round'
  }

  export type BookDetailsTypes = {
    id ?: string,
    isbn ?: string,
    createdAt ?: any
    title ?: string,
    cover ?: string
    author ?: string,
    description ?: string
    rating ?: number,
    isFavorite ?: boolean,
    releaseDate ?: string,
    pageNumber ?: number,
    publisher ?: string,
  }

  export type SortKeysType = {
    key: string,
    order: 'asc' | 'desc'
  }

  export type filterTypes = {
    searchKey: string;
    exactMatch: boolean;
    author: boolean;
    publisher: boolean;
    rating: string;
    yearRange: {start: number, end: number }
  }