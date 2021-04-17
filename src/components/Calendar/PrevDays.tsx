import React, { memo, useEffect, useState } from 'react';

interface Props {
  date: Date
  month: number
}

const PrevDays: React.FC<Props> = memo(({month, date}) => {
  const [ days, setDays ] = useState<JSX.Element[]>([]);
  const [ index, setIndex ] = useState(date.getDay() - 2);

  useEffect(() => {
    date.setMonth(month);
    setDays([]);
    setIndex(date.getDay() - 2);
  
  
  }, [date, month])

  useEffect(() => {
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    if(index > 0) {
      setIndex(index - 1)
      setDays([
        ...days, 
        <div key={index} className="prev-date">
          {prevLastDay - index + 1}
        </div>
      ]);
    }
  }, [days, month, index, date])
  

  return (
    <>
      {
        days.map((day) => day)
      }
    </>
  )
})

export default PrevDays;