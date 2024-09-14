import React, { useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'flex items-center justify-center uppercase text-light-500',
  {
    variants: {
      color: {
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-500',
        error: 'bg-error-500',
        warning: 'bg-warning-500 text-dark-500',
        success: 'bg-success-500',
        info: 'bg-info-500',
        default: 'bg-default-500',
        inherit: 'bg-inherit'
      },
      size: {
        sm: 'h-[34px] w-[34px] text-sm/8',
        base: 'h-9 w-9 text-base/9',
        lg: 'h-[38px] w-[38px] text-base/9 font-semibold',
        xl: 'h-10 w-10 text-base/10 font-semibold'
      },
      radius: {
        none: 'rounded-none',
        soft: 'rounded',
        round: 'rounded-full'
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'base',
      radius: 'round'
    }
  }
)

export interface IAvatarProps extends VariantProps<typeof avatarVariants> {
  className?: string
  name: string
  src?: React.ImgHTMLAttributes<HTMLImageElement>['src']
}

const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>(
  ({ color, size, radius, className, name, src }, ref) => {
    const memoizedName = useMemo(() => {
      if (!name) return 'U'
      const splitName = name.split(' ')
      if (splitName.length > 1) {
        return (
          splitName[0].charAt(0) + splitName[splitName.length - 1].charAt(0)
        )
      } else {
        return splitName[0].charAt(0)
      }
    }, [name])

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ color, size, radius, className }))}
      >
        {src ? (
          <img
            className={cn(avatarVariants({ radius, size }))}
            src={src}
            alt={name}
          />
        ) : (
          memoizedName
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export default Avatar
