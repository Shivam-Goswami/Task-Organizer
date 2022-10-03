import React, { useState, useEffect} from 'react';


const  Timer = ({seconds, setSeconds, mintues, setMintues})  => {
    var timer;
    useEffect(()=>{

        timer=setInterval(()=>{
            setSeconds(seconds+1);
            if (seconds==59) {
                setMintues(mintues+1);
                setSeconds(0);
            }
        },1000)

        return ()=>clearInterval(timer);


    });
    
  return (
    <div>Timer</div>
  )
}

export default Timer;