import React from 'react';
import { Checkbox as RACheckbox } from "../ui/checkbox";
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { commonTypes } from '@/types/commontypes';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const radioVariants = cva('text-base', {
    variants: {
      color: {
        primary: 'border-primary-500 text-primary-500',
        secondary: 'border-secondary-500 text-secondary-500',
        error: 'border-error-500 text-error-500',
        warning: 'border-warning-500 text-warning-500',
        success: 'border-success-500 text-success-500',
        info: 'border-info-500 text-info-500',
        default: 'border-default-500 text-default-500',
      },
    //   size: {
    //     sm: 'h-3 w-3 text-sm/8',
    //     base: 'h-4 w-4 text-base/9',
    //     lg: 'h-5 w-5 text-lg/9',
    //     xl: 'h-6 w-6 text-xl/9'
    //   },
    },
    defaultVariants: {
      color: 'default',
    //   size: 'base'
    }
  })

export interface ICheckboxProps extends CheckboxProps {
    color?: commonTypes['color']
}

const Checkbox: React.FC<ICheckboxProps> = ({ color='default', className, ...props }) => {
    return (
        <RACheckbox className={cn(radioVariants({color}), className)} {...props}/>
      )
};

Checkbox.displayName = 'Checkbox'; // Set a display name for better debugging

export default Checkbox;
