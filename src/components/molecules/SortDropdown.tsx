import { useData } from "@/hooks/useFetchData";
import { NestedDropdownMenu } from "../atom/DropdownMenu";

const items = [ "Title", "Author", "Publisher", "Ratings" ];
export interface SortKeysType {
  key: string,
  order: 'asc' | 'desc'
}

export function SortDropdown() {
  const {setSortKeys } = useData()

  const handleAction = (key: string, order: 'asc' | 'desc') => {
    setSortKeys({ key, order });
  };

  const menuItems = items.map(item => ({
    label: item,
    subItems: [
      {
        label: 'Ascending',
        action: () => handleAction(item, 'asc'),
      },
      {
        label: 'Descending',
        action: () => handleAction(item, 'desc'),
      }
    ],
  }));
  return <NestedDropdownMenu triggerLabel="Sort by" items={menuItems} />;
}
