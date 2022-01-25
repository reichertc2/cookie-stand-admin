import { useState } from "react"

export default function CreateForm(props) {
    const [entryName, setEntryName] = useState()
    const [entryMinCus, setMinCus] = useState()
    const [entryMaxCus, setMaxCus] = useState()
    const [entryAvgCook, setAvgCook] = useState()
    const [locationSum, setLocationSum] = useState()
    const [hourSum, setHourSum] = useState()


    function sumRows(data) {

    }

    function sumColumns(data) {

    }

    function gatherFormInfo(event) {
        setMinCus()
        setMaxCus()
        setAvgCook()
    }

    function randomTimes() {
        return
    }

    function handleClick(event) {
        event.preventDefault();
        let newEntry = []
        let locale = entryName
        console.log('handleClick entryName', locale)
        newEntry.push(entryName)
        // gatherFormInfo()
        // form data
        // collect sums
        // append to array
        console.log('handleClick: ', newEntry)
        props.newLocation(newEntry)
    }

    console.log('state read', entryName)
    return (
        <article className="mx-auto m-4 w-3/4 bg-green-200 p-3 rounded">
            <form>
                <fieldset>
                    <legend className="font-bold text-center text-lg">Create Cookie Stand</legend>
                    <label className="m-4 inline-block w-2/3 ">Location:
                        <input type="text" className="rounded ml-2 w-3/4 inline-block" placeholder='Cookie Stand Location'></input>
                    </label>
                    <button className="bg-green-400 rounded py-5 px-20 b- 3" onClick={(event) => handleClick(event)}>Create</button>

                    <label className="text-center bg-green-300 mx-2 p-2 py-3 rounded inline-block w-1/4 text-sm">Minimum Customers per Hour:
                        <br></br>
                        <input type="text" className="rounded mt-3 w-3/4" ></input>
                    </label>
                    <label className="text-center bg-green-300 mx-2 p-2 py-3 rounded inline-block w-1/4 text-sm">Maximum Customers per Hour:
                        <br></br>
                        <input type="text" className="rounded mt-3 w-3/4"></input>
                    </label>
                    <label className="text-center bg-green-300 mx-2 p-2 py-3 rounded inline-block w-1/4 text-sm">Average Cookies per Sale:
                        <br></br>
                        <input type="text" className="rounded mt-3 w-3/4" ></input>
                    </label>
                </fieldset>
            </form>
        </article>
    )
}