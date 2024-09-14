interface IFooterProps  {
    content?:string
}

const Footer: React.FC<IFooterProps> = ({content}) => {
  return (
    <div className="w-full flex justify-center text-default-600 text-sm p-8">{content}</div>
  )
}

export default Footer