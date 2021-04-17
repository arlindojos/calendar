import React, { memo, useEffect, useState } from 'react';

interface Props {
  month: number
  year: number
}

const NextDays: React.FC<Props> = memo(({month, year}) => {
  const [ days, setDays ] = useState<JSX.Element[]>([]);
  const [ index, setIndex ] = useState(1);

  useEffect(() => {
    const lastDayIndex = new Date(
      year,  
      month + 1,
      0
    ).getDay();

    const nxtDays = 7 - lastDayIndex -1

    if(index <= nxtDays) {
      setIndex(index + 1)
      setDays([
        ...days, 
        <div key={index} className="next-date">
          {index}
        </div>
      ]);
    }
  }, [days, index, month, year])

  return (
    <>
      {
        days.map((day) => day)
      }
    </>
  )
})

export default NextDays;