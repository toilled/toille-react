import { useState } from "react";
import pages from "./assets/pages.json";
import Title from "./components/Title";
import Menu from "./components/Menu";
import PageContent from "./components/PageContent";

function App() {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <nav>
        <Title />
        <Menu pages={pages} setCurrentPage={setCurrentPage} />
      </nav>
      <PageContent page={currentPage} />
    </>
  )
}

export default App
