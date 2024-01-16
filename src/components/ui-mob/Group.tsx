
import 'server-only'
import { IGroupSingle} from "@/interfaces"
import Day from "./Day"

export default async function Group({group, dataMon}:IGroupSingle) {
    
    const unDay ='Relax'
    return(
        <>
            <h3>{group.$.Name}</h3>
            {group.Timetable ? group.Timetable[0].Day.map((day) => (
                <Day key={day.$.N} day={day} dataMon={dataMon}/> 
            )) : ''}
        </>
    )
}
