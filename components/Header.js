import Link from "next/link"
import { useReducer } from "react"


export default function Header(props) {
    return (
        <header className="w-100 bg-green-400 pt-2 pb-2">
            <h3 className="font-bold ml-4 inline-block pr-9">Cookie Stand Admin</h3>
            <nav className='inline-block float-right'>
                {/* <h4>{user.username}:{user.id}</h4> */}
                <button className=" mr-5 bg-green-700 rounded text-sm inline-block" onClick={props.logout}>Sign Out</button>

                <Link href='/overview'>
                    <a className=" mr-5 bg-gray-100 rounded text-sm inline-block">Overview</a>
                </Link>
            </nav>
        </header>
    )

}
