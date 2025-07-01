import { statistic as statisticData } from '@/app/home/model/data'

import { statisticDataType } from '@/app/home/model/type'; 
import Card from '@/components/card'

export default function Statistic() {
  return (
    <div className='flex justify-between my-4 gap-x-16'>
      {statisticData.map((item: statisticDataType) => (
        <Card key={item.id} title={item.title} description={item.description} className='flex-1'/>
      ))}
    </div>
  )
}
