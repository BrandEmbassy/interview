import { sortBy, prop, reverse } from 'ramda';
import { Contact } from '../state/types';

export enum FILTER {
  All,
  Ascending,
  Descending,
}

export type FilterSort = (list: Contact[]) => Contact[];
export interface FilterType {
  name: string;
  filter: FILTER;
  sort: FilterSort;
}
export const Filters: FilterType[] = [
  {
    name: 'All',
    filter: FILTER.All,
    sort: (list: Contact[]): Contact[] => list,
  },
  {
    name: 'A-Z',
    filter: FILTER.Ascending,
    sort: (list: Contact[]): Contact[] => sortBy(prop('name'))(list),
  },
  {
    name: 'Z-A',
    filter: FILTER.Descending,
    sort: (list: Contact[]): Contact[] => reverse(sortBy(prop('name'))(list)),
  },
];
