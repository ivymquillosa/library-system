import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface FilterFormProps {
  onFilter: (selectedOption: string) => void;
}

const DropdownFilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Correct type for onSubmit to avoid TypeScript errors
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Optional validation: Ensure that an option is selected
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }

    onFilter(selectedOption);
  };

  return (
    <Form>
      <FormField name="filterOption">
        <FormItem>
          <FormLabel>Select an Option:</FormLabel>
          <FormControl>
            <Select onValueChange={setSelectedOption}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" className="mt-4 w-full">
        Apply Filter
      </Button>
    </Form>
  );
};

const DropdownFormFilter: React.FC<FilterFormProps> = ({ onFilter }) => {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button className="w-[150px]">
            Filter
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-4">
            <DropdownFilterForm onFilter={onFilter} />
        </PopoverContent>
    </Popover>
  );
};

// export default FilterDropdown;

export default DropdownFormFilter;
