import { Card } from 'antd';

interface NewsCardProps {
  title: string;
  meta?: string;
  description? :string;
  thumbnail?: string;
}

export default function NewsCard({title, description, meta = '', thumbnail}: NewsCardProps) {
  console.log(thumbnail);
  return (
    <Card
      hoverable
      style={{minWidth: 200}}
      className="w-full sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[400px]"
      cover={<img alt={title} src={thumbnail}  className="w-full h-auto object-cover" />}
    >
      <h2 className='text-xl text-primary font-medium'><span>{meta}</span></h2>
      <h2 className='text-lg font-semibold'>{title}</h2>
      {description && <>{description}</>}
    </Card>
  )
}
