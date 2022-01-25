import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

import { useState } from "react"

export default function Main(props) {
    const [locations, setLocation] = useState()


    function newLocation(locale) {
        let updatedLocations = locations.push(locale)
        console.log('newLocation updatedLocations: ', updatedLocations)
        // setLocation(updatedLocations)
        props.locationCounter(locations.length)
    }
    return (
        <>


            <main>
                <CreateForm
                    newLocation={newLocation}
                />
                <ReportTable
                    locations={locations}
                    stands={props.stands}
                    deleteStand={props.deleteStand} />
            </main>

        </>
    )
}

