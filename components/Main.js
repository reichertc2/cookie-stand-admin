import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

export default function Main(props) {
    const [tableData,settableData] = []
    return (

        <main>
            <CreateForm />
            <ReportTable />
        </main>

    )
}

