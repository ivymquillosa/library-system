import { FC, forwardRef, RefAttributes } from "react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { FiHeart } from "react-icons/fi";
import { BookDetailsTypes, commonTypes } from "@/types/commontypes"
import ButtonIcon from "../atom/ButtonIcon"
import Modal from "./Modal";

const cardPreviewVariants = cva('flex flex-col items-center p-6 gap-6 ',
  {
    variants: {
      color: {
        primary: 'border-primary-500',
        secondary: 'border-secondary-500',
        error: 'border-error-500',
        warning: 'border-warning-500',
        success: 'border-success-500',
        info: 'border-info-500',
        default: 'border-default-500',
      }
    },
    defaultVariants: {
      color: 'default',
    }
  })

export interface ICardBookPreviewProps {
  cardData ?: BookDetailsTypes
  onClickToggle ?: (id: string) => void;
  color?: commonTypes['color']
  className?: string
}
const CardBookPreview: FC<ICardBookPreviewProps & RefAttributes<HTMLDivElement>> = forwardRef(
  ({cardData={}, onClickToggle, className, color }, ref) => {
    return (
     <Card ref={ref} className={cn(cardPreviewVariants({ color, className }))}>
      <img className="h-48" src={cardData?.cover ?? ''}/>
      <div style={{ width: '-webkit-fill-available'}} className="flex gap-3">
        <div className="flex-1 flex flex-col overflow-x-hidden gap-2"> 
          <CardTitle className="truncate leading-tight">{cardData?.title ?? ''}</CardTitle>
          <CardDescription className="truncate">{cardData?.author ?? ''}</CardDescription>
        </div>
        <ButtonIcon
          size='xl'
          radius="round"
          className={cardData.isFavorite ? 'text-white' : ''}
          onClick={()=> onClickToggle?.(cardData.id ?? '')}
          variant={cardData.isFavorite ? 'fill' : 'outline'}
          color={cardData.isFavorite ? 'error' : 'primary'} 
        >
          <FiHeart/>
        </ButtonIcon>
      </div>
      <CardFooter className="flex w-full p-0 justify-between">
        <Modal modalData={cardData} />  
      </CardFooter>
    </Card>
    )
  }
)

CardBookPreview.displayName = 'CardBookPreview'

export default CardBookPreview


  
