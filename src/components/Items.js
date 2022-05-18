import React, {useEffect, useState} from "react";
import './Items.css'



const Items = () => {

    let timer;

    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const [startTimer,setStartTimer] = useState(false);
    // const [resume,setResume] = useState(false);
    const [time,setTime] = useState();

    const hourHandler = (event) =>{
        setTime(event.target.value);
        setHours(event.target.value);
    }

    const minuteHandler = (event) =>{
        setTime(event.target.value);
        setMinutes(event.target.value);
    }

    const secondHandler = (event) =>{
        setTime(event.target.value);
        setSeconds(event.target.value);
    }

    const timerHandler = () => {
        setStartTimer(true);
    }


        useEffect(()=> {

            if (startTimer) {

                // if (!resume) {

                    timer = setInterval(() => {

                        setSeconds(prevSeconds => prevSeconds - 1);
                        if (seconds === 0) {
                            setMinutes(prevMinutes => prevMinutes - 1);
                            if (minutes === 0) {
                                setHours(prevHours => prevHours - 1);
                                setMinutes(59);
                            }
                            setSeconds(59);
                        }

                    }, 1000)

                    return (e) => {
                        if (hours === 0 && minutes === 0 && seconds === 0)
                            e.preventDefault();
                        clearInterval(timer);
                    };


                }
            // }


        });

        const restartTimer = () => {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
            setStartTimer(false);

        }

        // const resumeTimer = () => {
        //     setStartTimer(true);
        //     setResume(true);
        //
        // }



        const stopTimer = () => {
            clearInterval(timer);

        }



    return(
        <div className="container m-auto">

            <div className="title">
                <h1>THE BATMAN TIMER</h1>
                <h4>IF YOU ARE JUSTICE,PLEASE SELECT TIME</h4>
            </div>

            <div className="row m-auto">

                <div className="col-lg-4">

                  <select className="item-select" onChange={hourHandler}>
                      <option value="">HOURS</option>
                      <option value="0" className="option-select">0</option>
                      <option value="1" className="option-select">1</option>
                      <option value="2" className="option-select">2</option>
                      <option value="3" className="option-select">3</option>
                  </select>

                <div className="card justify-content-center">
                    <div className="card-body justify-content-center text-center">
                        <h1>{hours < 10 ? "0"+hours:hours}</h1>
                    </div>
                    <div className="card-footer">
                        <h2>HOURS</h2>
                    </div>
                </div>

                </div>


                <div className="col-lg-4">

                    <select  className="item-select" onChange={minuteHandler}>
                        <option value="">MINUTES</option>
                        <option value="0" className="option-select">0</option>
                        <option value="1" className="option-select">1</option>
                        <option value="2" className="option-select">2</option>
                        <option value="3" className="option-select">3</option>
                    </select>

                <div className="card justify-content-center">
                    <div className="card-body justify-content-center text-center">

                        <h1>{minutes < 10 ? "0"+minutes:minutes}</h1>

                    </div>

                    <div className="card-footer">
                        <h2>MINUTES</h2>
                    </div>

                </div>
                </div>

                <div className="col-lg-4">

                    <select className="item-select" onChange={secondHandler}>
                        <option value="">SECONDS</option>
                        <option value="0" className="option-select">0</option>
                        <option value="1" className="option-select">1</option>
                        <option value="2" className="option-select">2</option>
                        <option value="3" className="option-select">3</option>
                    </select>

                    <div className="card justify-content-center">
                        <div className="card-body justify-content-center text-center">

                            <h1>{seconds < 10 ? "0"+seconds:seconds}</h1>

                        </div>

                        <div className="card-footer">
                            <h2>SECONDS</h2>
                        </div>

                    </div>
                </div>




            </div>



            {!startTimer && <button className="button" onClick={timerHandler} type="button">START</button>}
            {startTimer && <button className="button" onClick={restartTimer} type="button">RESET</button>}
            {startTimer &&  <button className="button" onClick={stopTimer} type="button">STOP</button>}
            {/*{!resume && <button className="button" onClick={resumeTimer} type="button">RESUME</button>}*/}





        </div>
    )

}

export default Items;