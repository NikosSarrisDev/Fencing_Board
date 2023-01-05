import React , {useState} from 'react'
import { Button } from './Button'
import { Button_minus } from './Button_minus'
// import { Point_Score } from './Point_Score';

export const Card_left = () => {

    const [value_of_team , setValue_of_team] = useState(0);

    const Change_the_State = () => {
        setValue_of_team(prev => prev + 1);
    }

    const Change_the_State_minus = () => {
        setValue_of_team(prev => prev - 1);
    }

  return (
    <div className='left_Card'>
        <div className='class_for_counter_div_with_red'>{value_of_team}</div>
        <Button onClick = {Change_the_State}/><br></br>
        <Button_minus onClick = {Change_the_State_minus}/>
    </div>
  )
}
