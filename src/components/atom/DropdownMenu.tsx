import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import Button from './Button';
import { PopoverPortal } from '@radix-ui/react-popover';

interface NestedDropdownProps {
  label: string;
  items: Array<{
    label: string;
    action?: () => void;
    subItems?: Array<{ label: string; action?: () => void }>;
  }>;
}

const NestedDropdown = ({ label, items }: NestedDropdownProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" radius='soft'>
          {label} <FiChevronDown className="ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
      
        <PopoverContent align="start" className="p-0 w-64">
          <DropdownMenu>
            <DropdownMenuContent className="p-2">
              {items.map((item, index) => (
                <DropdownMenuItemWithSubmenu
                  key={index}
                  label={item.label}
                  subItems={item.subItems}
                  action={item.action}
                />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

interface DropdownMenuItemWithSubmenuProps {
  label: string;
  action?: () => void;
  subItems?: Array<{ label: string; action?: () => void }>;
}

const DropdownMenuItemWithSubmenu = ({
  label,
  action,
  subItems,
}: DropdownMenuItemWithSubmenuProps) => {
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <div className="relative">
      <DropdownMenuItem className="cursor-pointer" onSelect={action}>
        {label}
        {hasSubItems && <FiChevronRight className="ml-auto" />}
      </DropdownMenuItem>

      {hasSubItems && (
        <Popover>
          <PopoverTrigger asChild>
            <div className="absolute right-0 top-0 h-full w-8 cursor-pointer"></div>
          </PopoverTrigger>
          <PopoverPortal>
            <PopoverContent align="start" className="absolute left-full top-0 w-48 p-0">
              <DropdownMenu>
                <DropdownMenuContent className="p-2">
                  {subItems.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} onSelect={subItem.action}>
                      {subItem.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </PopoverContent>
          </PopoverPortal>
        </Popover>
      )}  
    </div>
  );
};

export default NestedDropdown;
