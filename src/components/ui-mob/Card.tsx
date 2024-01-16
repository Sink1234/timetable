'use client'

import { LessonSingle } from "@/interfaces"


const Card= ({lesson}: LessonSingle) => {

    console.log(lesson.Part.length)
    return(
        <>
           
                { lesson.Part.length < 2 ? (
                    <span>
                        <div>{lesson.Part[0].Name[0]}</div>
                        <div>{lesson.Part[0].Teacher[0]}</div>
                        <div>{lesson.Part[0].Auditorium ? lesson.Part[0].Auditorium[0].$.Number : '----'}</div> 
                    </span>
                    
                ) : (
                    <span>
                        <div>{lesson.Part[0].Name[0]}</div>
                        <div>{lesson.Part[0].Teacher[0] + ', ' + lesson.Part[1].Teacher[0]}</div>
                        <div>{lesson.Part[0].Auditorium ? lesson.Part[0].Auditorium[0].$.Number + ', ' + lesson.Part[0].Auditorium[0].$.Number : '----'}</div> 
                    </span>
                )}

        </>
    )
}

export default Card