export default function ReportTable(props) {
    const tableHeader = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals']
    const tableBody = ['Barcelona',48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36,400]
    return (
        <article>
            {false ?
                <h3 className="text-center mb-3">No Cookie Stands Available</h3> :
                <table className="mx-auto w-3/4 mt-5 mb-5 rounded">
                    <thead className="bg-green-400 rounded">
                        <tr>
                            {tableHeader.map((value) => <th className="px-1.5">{value}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {tableBody.map((value) => <td className="font-normal border-2 border-gray-700 text-center">{value}</td>)}
                        </tr>
                    </tbody>
                    <tfoot className="bg-green-400 rounded">
                        <tr>

                            {tableHeader.map((value) => <td className="font-bold px-1.5">{value}</td>)}

                        </tr>
                    </tfoot>
                </table>
            }
        </article >
    )
}