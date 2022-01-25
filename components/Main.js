import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

import { useState } from "react"

export default function Main(props) {
    const [locations, setLocation] = useState([['Barcelona', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 400], ['Barcelona', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 400]])
    

    function newLocation(locale) {
        let updatedLocations = locations.push(locale)
        console.log('newLocation updatedLocations: ', updatedLocations)
        // setLocation(updatedLocations)
        props.locationCounter(locations.length)
    }
    return (
        <>

            
                <main>
                    <CreateForm newLocation={newLocation} />
                    <ReportTable locations={locations} />
                </main>
            
        </>
    )
}

