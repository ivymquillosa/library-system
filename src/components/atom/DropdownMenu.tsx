import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { ReactNode } from "react"
import Button from "./Button";

interface NestedDropdownMenuItemType {
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  action?: () => void;
  subItems?: NestedDropdownMenuItemType[];
}

interface NestedDropdownMenuProps {
  triggerLabel: string;
  items: NestedDropdownMenuItemType[];
}

export function NestedDropdownMenu({ triggerLabel, items }: NestedDropdownMenuProps) {
  const renderMenuItems = (menuItems: NestedDropdownMenuItemType[]) => (
    <>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.subItems ? (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span className="capitalize">{item.label}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {renderMenuItems(item.subItems)}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem onSelect={item.action} disabled={item.disabled}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span className="capitalize">{item.label}</span>
              {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
            </DropdownMenuItem>
          )}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" radius="soft" size="sm" color="primary">{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="w-32 right-0">
        {renderMenuItems(items)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
