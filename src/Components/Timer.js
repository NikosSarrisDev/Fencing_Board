import React, { useEffect, useRef, useState } from 'react'


const formatTitle = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if(minutes <= 10) minutes = "0" + minutes;
  if(seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds
}

export const Timer = (props) => {

  const [stateButton , setstateButton] = useState("Start");
  const [classname , setClassName] = useState("button_start_stop");


  const Change_The_State = () => {
    
    setstateButton(stateButton === "Start" ? "Stop" : "Start")

    setClassName(classname === "button_start_stop" ? "button_start_stop_red" : "button_start_stop")

  }

    const [countDown , setcountDown] = useState(props.seconds);


    const timerId = useRef()

    useEffect(() => {
      if (stateButton === "Stop"){
      timerId.current = setInterval(() => {
        setcountDown(prev => prev - 1)
      },1000)
      return () => clearInterval(timerId.current)}
    }, [stateButton])

    useEffect(() => {
      if (countDown <= 0 ){
        clearInterval(timerId.current)
        // alert("END")
      }
    },[countDown])

  return (
    <>
    <div className='timer'>
        {formatTitle(countDown)}
    </div><br></br>
    <button className={classname} onClick = {Change_The_State}>
    <p>{stateButton}</p>
    </button>
    </>
  )
}
