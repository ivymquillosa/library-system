import { NestedDropdownMenu } from "../atom/DropdownMenu";

const items = [
  {
    label: "Title",
    action: () => console.log("Profile clicked"),
    subItems: [
      {
        label: "Ascending",
        action: () => console.log("Title Ascending clicked"),
      },
      {
        label: "Descending",
        action: () => console.log("Title Descending clicked"),
      },
    ],
  },
  {
    label: "Author",
    action: () => console.log("Author clicked"),
    subItems: [
      {
        label: "Ascending",
        action: () => console.log("Author Ascending clicked"),
      },
      {
        label: "Descending",
        action: () => console.log("Author Descending clicked"),
      },
    ],
  },
  {
    label: "Publisher",
    action: () => console.log("Publisher clicked"),
    subItems: [
      {
        label: "Ascending",
        action: () => console.log("Publisher Ascending clicked"),
      },
      {
        label: "Descending",
        action: () => console.log("Publisher Descending clicked"),
      },
    ],
  },
  {
    label: "Ratings",
    action: () => console.log("Ratings clicked"),
    subItems: [
      {
        label: "Ascending",
        action: () => console.log("Ratings Ascending clicked"),
      },
      {
        label: "Descending",
        action: () => console.log("Ratings Descending clicked"),
      },
    ],
  },
  {
    label: "Team",
    subItems: [
      {
        label: "Ascending",
        action: () => console.log("Team Ascending clicked"),
      },
      {
        label: "Descending",
        action: () => console.log("Team Descending clicked"),
      },
    ],
  },
 
];

export function SortDropdown() {
  return <NestedDropdownMenu triggerLabel="Sort" items={items} />;
}
