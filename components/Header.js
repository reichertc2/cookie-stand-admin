import Link from "next/link"


export default function Header(props) {
    return (
        <header className="w-100 bg-green-400 pt-2 pb-2">
            <h3 className="font-bold ml-4 inline-block pr-9">Cookie Stand Admin</h3>
            
            <button className="float-right mr-5 bg-gray-100 rounded text-sm inline-block" onClick={props.logout}>Sign Out</button>
            <Link href='/overview'>
            <a className="float-right mr-5 bg-gray-100 rounded text-sm inline-block">Overview</a>
            </Link>
        </header>
    )

}
