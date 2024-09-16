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

interface NestedDropdownMenuItem {
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  action?: () => void;
  subItems?: NestedDropdownMenuItem[];
}

interface NestedDropdownMenuProps {
  triggerLabel: string;
  items: NestedDropdownMenuItem[];
}

export function NestedDropdownMenu({ triggerLabel, items }: NestedDropdownMenuProps) {
  const renderMenuItems = (menuItems: NestedDropdownMenuItem[]) => (
    <>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.subItems ? (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.label}</span>
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
              <span>{item.label}</span>
              {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
            </DropdownMenuItem>
          )}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" radius="soft" size="sm" color="primary">{triggerLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {renderMenuItems(items)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
