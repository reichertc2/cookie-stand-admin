import { hours } from "../data"
import { useState } from "react"


export default function ReportTable(props) {
 

    
    return (
        <article>
            {!props.locations ?
                <h3 className="text-center mb-3">No Cookie Stands Available</h3> :
                <table className="mx-auto w-3/4 mt-5 mb-5 rounded">
                    <thead className="bg-green-400 rounded">
                        <tr>
                            <th className="px-1.5">Location</th>
                            {hours.map((value) => <th className="px-1.5" key={value._id}>{value}</th>)}
                            <th className="px-1.5">Totals</th>
                        </tr>
                    </thead>
                    <tbody>
                            {props.locations.map((value) =><tr key={value._id}>{ 
                                value.map((element)=><td className="font-normal border-2 border-gray-700 text-center" key={element._id}>{element}</td>)}</tr>)}
                        
                    </tbody>

                    <tfoot className="bg-green-400 rounded">
                        <tr>
                            <td className="font-bold px-1.5">Totals</td>
                            {hours.map((value) => <td className="font-bold px-1.5" key={value}>{value}</td>)}

                        </tr>
                    </tfoot>
                </table>
            }
        </article >
    )
}