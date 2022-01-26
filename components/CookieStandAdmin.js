import Head from "next/head"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
import useResource from '../hooks/useResource'

export default function CookieStandAdmin(props) {
  const [storeCount, setStoreCount] = useState(0)
  const {resources,deleteResources} = useResource()
  const standsCount = resources ? resources.length : 0;

  function handleLocations(count) {
    setStoreCount(count)
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header logout={props.logout}/>

        <Main
          locationCounter={handleLocations}
          stands={resources || []}
          deleteStand={deleteResources}
        />
      <Footer stores={standsCount} />

    </>
  )
}
