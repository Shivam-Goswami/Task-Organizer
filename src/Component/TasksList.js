import React, { useState } from "react";

const TasksList = ({ tasks, time, setTasks, setTimerOn, timerOn }) => {
    const parseSec = (time) => {
        let hour = 0, min = 0, sec = 0;
        if (time >= 3600) {
            hour = parseInt(time / 3600);
            time = time % 3600
            min = parseInt(time / 60);
            time = time % 60;
            sec = parseInt(time);
        }
        else if (time < 3600 && time > 60) {
            min = parseInt(time / 60);
            time = time % 60;
            sec = parseInt(time);
        }
        else {
            sec = time;
        }

        return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    }

    const [currentTaskId, setCurrentTaskId] = useState('')


    const HandleTimer = (check, taskid) => {
        console.log("lun", check, "iu", taskid)

        if (check) {
            setCurrentTaskId(taskid)
            let tempTask = tasks
            setTimerOn(true)
            for (var i = 0; i < tempTask.length; i++) {
                if (tempTask[i].id === taskid) tempTask[i].active = true;
            }
            console.log("iuiou", tempTask);
            setTasks(tempTask)
        }
        else {
            if (taskid !== currentTaskId) return alert("One Task is in progess, Please pause it to start another")
            let tempTask = tasks
            for (var j = 0; j < tempTask.length; j++) {
                if (tempTask[j].id === taskid) {
                    tempTask[j].curtime += time;
                    tempTask[j].active = false;
                }
                setTasks(tempTask)
                setTimerOn(false);
            }
        }
    }
    return (
        <div>
            {tasks.map((task) => (
                <li className="list-item" key={task.id}>
                    <div>
                        <button className='button-task' onClick={(e) => {
                            e.preventDefault()
                            HandleTimer(!timerOn, task.id)
                        }}>{task.title}</button>
                        <span className="timer-list">{task.active ? parseSec(task.curtime + time) : parseSec(task.curtime)}</span>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TasksList