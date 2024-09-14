import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { commonTypes } from '@/types/commontypes'
import { cn } from '@/lib/utils'

const badgeVariants = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'px-3 text-xs/5',
      base: 'px-3 text-sm/6',
      lg: 'px-4 text-sm/7',
      xl: 'px-5 text-base/8'
    },
    radius: {
      none: 'rounded-none',
      soft: 'rounded',
      round: 'rounded-full'
    }
  },
  defaultVariants: {
    size: 'base',
    radius: 'round'
  }
})

const badgeStyles = {
  variant: {
    ghost: {
      primary: 'bg-transparent hover:bg-primary-50 text-primary-500',
      secondary: 'bg-transparent hover:bg-secondary-50 text-secondary-500',
      default: 'bg-transparent hover:bg-default-50 text-default-500',
      success: 'bg-transparent hover:bg-success-50 text-success-500',
      warning: 'bg-transparent hover:bg-warning-50 text-warning-500',
      error: 'bg-transparent hover:bg-error-50 text-error-500',
      info: 'bg-transparent hover:bg-info-50 text-info-500',
    },
    fill: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-light-500 border-light-500 border-0',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 text-light-500 border-light-500 border-0',
      default:
        'bg-default-500 hover:bg-default-600 text-light-500 border-light-500 border-0',
      success:
        'bg-success-500 hover:bg-success-600 text-light-500 border-light-500 border-0',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-dark-500 border-dark-500 border-0',
      error:
        'bg-error-500 hover:bg-error-600 text-light-500 border-light-500 border-0',
      info: 'bg-info-500 hover:bg-info-600 text-light-500 border-light-500 border-0',
    },
    outline: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 hover:bg-primary-50',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600 hover:bg-secondary-50',
      default:
        'bg-transparent border text-default-500 border-default-500 hover:text-default-600 hover:border-default-600 hover:bg-default-50',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600 hover:bg-success-50',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600 hover:bg-warning-50',
      error:
        'bg-transparent border text-error-500 border-error-500 hover:text-error-600 hover:border-error-600 hover:bg-error-50',
      info: 'bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600 hover:bg-info-50',
    },
  }
}

export interface IBadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string
  variant?: commonTypes['variant']
  color?: commonTypes['color']
  label?: string
  children?: React.HTMLAttributes<HTMLDivElement>['children']
}

const Badge = React.forwardRef<HTMLDivElement, IBadgeProps>(
  (
    {
      variant = 'fill',
      color = 'primary',
      size,
      radius,
      className,
      label,
      children
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeStyles.variant[variant][color],
          badgeVariants({ size, radius, className })
        )}
      >
        {children || label}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
