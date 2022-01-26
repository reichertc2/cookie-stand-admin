export default function CreateForm(props) {
    return (
        <article className="mx-auto m-4 w-3/4 bg-green-200 p-3 rounded">
            <form>
                <fieldset>
                    <legend className="font-bold text-center text-lg">Create Cookie Stand</legend>
                    <label className="m-4 block ">Location:
                        <input type="text" className="rounded ml-2 w-5/6"></input>
                    </label>
                    <label className="text-center bg-green-300 mx-2 p-2 py-3 rounded inline-block w-1/4 text-sm">Minimum Customers per Hour:
                        <br></br>
                        <input type="text" className="rounded mt-3 w-3/4"></input>
                    </label>
                    <label className="text-center bg-green-300 mx-2 p-2 py-3 rounded inline-block w-1/4 text-sm">Maximum Customers per Hour:
                        <br></br>
                        <input type="text" className="rounded mt-3 w-3/4"></input>
                    </label>
                    <label className="text-center bg-green-300 mx-2 p-2 py-3 rounded inline-block w-1/4 text-sm">Average Cookies per Sale:
                        <br></br>
                        <input type="text" className="rounded mt-3 w-3/4"></input>
                    </label>
                    <button className="bg-green-400 rounded py-5 px-20" onClick={props.newLocation()}>Create</button>
                </fieldset>
            </form>
        </article>
    )
}