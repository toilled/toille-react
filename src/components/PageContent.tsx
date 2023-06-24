interface PageDetails {
    page: { name: string; title: string; body: string[]; }
}

function PageContent(props: PageDetails) {
    let currentPage = props.page;

    return <article className="animate__animated animate__zoomIn">
        <header>
            <h2 className="no-margin">{currentPage.title}</h2>
        </header>
        {currentPage.body.map((element, index) => {
            return <p dangerouslySetInnerHTML={{ __html: element }} key={index}></p>;
        })}
    </article>;
}

export default PageContent;