import React, { useCallback, useEffect, useState } from 'react';
import { months, weekDays } from './utils/calendar/days';
import { Container, Days, MarkedDate, Month, WeekDays } from './styles';
import PrevDays from './components/Calendar/PrevDays';
import NextDays from './components/Calendar/nextDays';


const date = new Date();

function App() {
  const [ month, setMonth ] = useState('');
  const [ day, setDay ] = useState(1);
  const [ weekDay, setWeekDay ] = useState('');
  const [ year, setYear ] = useState(2021);
  const [ days, setDays ] = useState<JSX.Element[]>([]);
  const [ index, setIndex ] = useState(1);
  const [ prevIndex, setPrevIndex ] = useState(day - 1);

  const isLessThanLastDay = useCallback(() => {
    const lastDay = new Date(
      date.getFullYear(), 
      date.getMonth()+1, 
      0
    ).getDate();
      
    return index <= lastDay
  }, [index])

  const prevDays = () => {
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    if(prevIndex > 0) {
      setPrevIndex(index - 1)
      setDays([
        ...days, 
        <div key={prevIndex} className="prev-date">
          {prevLastDay - index + 1}
        </div>
      ]);
    }
  }

  const createCalendar = useCallback(() => {
    if(isLessThanLastDay()) {
      setIndex(index + 1)
      setDays([
        ...days,
        <div key={index}>
          {index}
        </div>
      ]);
    }

    setMonth(months[date.getMonth()])
    setWeekDay(weekDays[date.getDay()])
    setDay(date.getDate())
    setYear(date.getFullYear())
  }, [days, index, isLessThanLastDay])

  useEffect(() => {
    createCalendar()
  }, [createCalendar])

  const prevMonth = useCallback(() => {
    date.setMonth(date.getMonth() -1)
    createCalendar()
  }, [])

  const nextMonth = useCallback(() => {
    date.setMonth(date.getMonth() +1)
    createCalendar()
  }, [])

  return (
    <Container>
      <Month>
        <i onClick={prevMonth}>{'<'}</i>
        <MarkedDate>
          <h1>{month}</h1>
          <p>{`${weekDay} ${day} ${month} ${year}`}</p>
        </MarkedDate>
        <i onClick={nextMonth}>{'>'}</i>
      </Month>
      <WeekDays>
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sáb</div>
      </WeekDays>
      <Days>
        <PrevDays date={date} month={date.getMonth()} />
        {
          days.map((day) => day)
        }
        <NextDays month={date.getMonth()} year={date.getFullYear()} />
      </Days>
    </Container>
  );
}

export default App;