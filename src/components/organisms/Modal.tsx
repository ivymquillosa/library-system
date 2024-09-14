import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Button from '../atom/Button';
import { BookDetailsTypes } from '@/types/commontypes';
import ButtonIcon from '../atom/ButtonIcon';
import { useData } from '@/hooks/useFetchData';
import { FiHeart } from 'react-icons/fi';
import { FaStar, FaRegStar } from "react-icons/fa";


export interface IModalProps {
  modalData?: BookDetailsTypes;
  className?: string;
}

const Modal: React.FC<IModalProps> = ({ modalData, className }) => {
  const { toggleFavorite } = useData();
  const rating = modalData?.rating ?? 0; // Default to 0 if no rating
  const clampedRating = Math.max(0, Math.min(rating, 5)); // Ensure rating is within 1-5

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="xl" radius="soft" block className="py-1.5">
          View Book
        </Button>
      </DialogTrigger>
      
      <DialogContent className={`lg:max-w-[620px] sm:max-w-[425px] pt-10 ${className}`}>
        <div className='flex gap-5'>
          <img className="h-48 rounded-sm w-fit" src={modalData?.cover ?? ''} alt={modalData?.title ?? 'Book cover'} />
          <div className='flex-1 flex-col gap-4 text-xs'>
            <p className='text-4xl font-bold py-1'>{modalData?.title}</p>
            <p className='text-xl'>{modalData?.author}</p>
            <p className='flex gap-3 text-muted-foreground'>
              <span>{modalData?.releaseDate}</span>
              <span>{modalData?.pageNumber}</span>
              <span>{`(${modalData?.publisher})`}</span>
            </p>
            <p className='text-muted-foreground'>{modalData?.isbn}</p>
            <div className='flex items-center'>
              <div className='flex-1'>
                <div className='flex items-center gap-0.5'>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                    key={index}
                    className='text-primary-500'
                    >
                      {index < clampedRating ? <FaStar/> : <FaRegStar/>}
                    </span>
                  ))}
                  <span className='text-sm text-muted-foreground px-1'>{`${rating}.0`}</span>
                </div>
                <p className='text-muted-foreground'>Rating</p>
              </div>
              <div className='flex gap-3 items-center pt-2'>
                <ButtonIcon
                  size='xl'
                  radius="round"
                  className={modalData?.isFavorite ? 'text-white' : ''}
                  onClick={()=> toggleFavorite?.(modalData?.id ?? '')}
                  variant={modalData?.isFavorite ? 'fill' : 'outline'}
                  color={modalData?.isFavorite ? 'error' : 'primary'} 
                >
                  <FiHeart className='text-lg'/>
                </ButtonIcon>
                <Button size="lg" radius="soft" className="">
                  Read
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogDescription>
          <DialogTitle className='py-2'>Description</DialogTitle>
          {modalData?.description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

Modal.displayName = 'Modal'; // Set a display name for better debugging

export default Modal;
