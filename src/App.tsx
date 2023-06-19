import { useState } from "react";

function App() {

  const pages = [
    {
      name: "Home",
      title: "Home",
      body: <>
        <p>This is my home page for testing ideas built using React.</p>
        <p>I will make the source code available <a href="https://github.com/toilled/toille">here</a>.</p>
      </>
    },
    {
      name: "About",
      title: "About Me",
      body: <>
        <p>I am a BSc (Hons) graduate who has been confident working with computers in some way for most of my life.</p>
        <p>I am currently based in the Gloucestershire area</p>
      </>
    },
    {
      name: "Interests",
      title: "My Interestes",
      body: <>
        <p>I develop new code ideas as a hobby in my spare time, actively keeping a check on new languages and new computing technologies on the internet.</p>
        <p>I keep up to date with music and play musical instruments including the guitar.</p>
      </>
    }];
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
            return <li onClick={() => setCurrentPage(page)} key={page.name}><a className='pointer'>{page.title}</a></li>
          })}
        </ul>
      </nav>
      <article className="animate__animated animate__zoomIn">
        <header><h2 className="no-margin">{currentPage.title}</h2></header>
        {currentPage.body}
      </article>
    </>
  )
}

export default App
