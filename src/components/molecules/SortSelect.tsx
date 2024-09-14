import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SortSelect() {
  return (
    <Select defaultValue='title'>
      <SelectTrigger className="w-48 border-primary-500 text-primary-600 !ring-0">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="title">Title</SelectItem>
          <SelectItem value="createdDate">Created Date</SelectItem>
          <SelectItem value="author">Author</SelectItem>
          <SelectItem value="rate">Ratings</SelectItem>
          <SelectItem value="pages">Number of Pages</SelectItem>
      </SelectContent>
    </Select>
  )
}
