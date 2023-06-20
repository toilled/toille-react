import { useState } from "react";
import pages from "./assets/pages.json";

function App() {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <nav>
        <ul className="animate__animated animate__slideInLeft">
          <li>
            <hgroup>
              <h1>Elliot Dickerson</h1>
              <h2>A site to test things</h2>
            </hgroup>
          </li>
        </ul>
        <ul className="animate__animated animate__slideInRight">
          {pages.map(page => {
            return <li onClick={() => setCurrentPage(page)} key={page.name}><a className='pointer'>{page.name}</a></li>
          })}
        </ul>
      </nav>
      <article className="animate__animated animate__zoomIn">
        <header><h2 className="no-margin">{currentPage.title}</h2></header>
        {currentPage.body.map(element => {
          return <p dangerouslySetInnerHTML={{ __html: element }}></p>
        })}
      </article>
    </>
  )
}

export default App
