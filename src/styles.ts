import styled from 'styled-components';

export const Container = styled.div`
  width: 45rem;
  height: 52rem;
  margin-top: 5rem;
  
  background-color: #000624;
  color: #fff;
`;
export const Month = styled.div`
  width: 100%;
  height: 12rem;
  background-color: rgba(21,35,62,0.4);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  text-align: center;

  > i {
    font-size: 2.2em;
    cursor: pointer;
  }
`;

export const MarkedDate = styled.div`
  > h1 {
    font-size: 3em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export const WeekDays = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 0.4rem;

  display: flex;
  align-items: center;

  > div {
    width: 20em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Days = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;

  > div {
    font-size: 0.9em;
    margin: 0.3rem;
    width: 6.4em;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  }

  > div:hover:not(.marked-day) {
    opacity: 1;
    border: 0.2rem solid #00E7C3;
    cursor: pointer;
  }

  .prev-date,
  .next-date {
    opacity: 0.5;
  }

  .marked-day {
    background-color: #00E7C3;
  }
`;