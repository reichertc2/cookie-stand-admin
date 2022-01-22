import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'

export default function CookieStandAdmin() {
  const [storeCount, setStoreCount] = useState(0)
  
  
  
  function handleLocations(count) {
    setStoreCount(count)
  }

  return (
    <>
      <Header />
      <Main 
        locationCounter={handleLocations}
        />
      <Footer stores={storeCount} />

    </>
  )
}
