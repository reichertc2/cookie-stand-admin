

export default function Home() {
  return (
    <>
      <header className="w-100 bg-green-400 pt-2 pb-2">
        <h3 className="font-bold ml-4">Cookie Stand Admin</h3>
      </header>
      <main>
        <article className="mx-auto m-4 w-3/4 bg-green-200 p-3 rounded">
          <form>
            <fieldset>
              <legend className="font-bold text-center text-lg">Create Cookie Stand</legend>
              <label className="m-4 block ">Location: 
                <input type="text" className="rounded ml-2 w-5/6"></input>
              </label>
              <label className="inline-block w-1/4 text-sm">Minimum Customers per Hour: 
              <br></br>
                <input type="text" className="rounded mt-3 w-3/4"></input>
              </label>
              <label className="inline-block w-1/4 text-sm">Maximum Customers per Hour: 
              <br></br>
                <input type="text" className="rounded mt-3 w-3/4"></input>
              </label>
              <label className="inline-block w-1/4 text-sm">Average Cookies per Sale: 
              <br></br>
                <input type="text" className="rounded mt-3 w-1 w-3/4"></input>
              </label>
              <button className="bg-green-400 rounded pt-2 pb-2 pr-7 pl-7">Create</button>
            </fieldset>
          </form>
        </article>
        <article>
          <h3 className="text-center">Report Table Coming Soon...</h3>
          <table className="mx-auto w-3/4 mt-5 mb-5">
            <tr>
              <th className="font-normal">{"\{\"location\": \"Barcelona\",\"minCustomers\":2,\"maxCustomers:4\",\"avg\":2.5\}"}</th>
            </tr>
          </table>
        </article>
      </main>
      <footer className="w-100 bg-green-400 pt-2 pb-2"><p className="ml-2">&copy; 2022</p></footer>

    </>
  )
}
