import './index.css'

import React , {useState} from 'react';
import { Card_left } from './Components/Card_left';
import { Card_right } from './Components/Card_right';
import { Timer } from './Components/Timer';


function App() {

  const [seconds_How_many , setSeconds_How_many] = useState(180);

  const Reset_to_3minutes = () => {

    setSeconds_How_many(180);
    // console.log("fhxhsxs");

  }

  const Reset_to_2minutes = () => {

    setSeconds_How_many(120);

  } 

  const Reset_to_1minute = () => {

    setSeconds_How_many(60);

  }
  
  return (
    <div>
      <Card_left />
      <Timer seconds = {seconds_How_many}/>
      <br/>
      <button className='button_for_reset_in_trhee_minutes' onClick={Reset_to_3minutes}>3 min</button>
      <button className='button_for_reset_in_two_minutes' onClick={Reset_to_2minutes}>2 min</button>
      <button className='button_for_reset_in_one_minute' onClick={Reset_to_1minute}>1 min</button>

      <Card_right />
    </div>
  );
}

export default App;
