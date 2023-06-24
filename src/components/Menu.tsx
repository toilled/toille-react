interface Page {
    name: string;
    title: string;
    body: string[];
}

interface MenuProps {
    pages: Page[];
    setCurrentPage: (page: Page) => void;
}

function Menu(props: MenuProps) {
    return <ul className="animate__animated animate__slideInRight">
        {props.pages.map(page => {
            return <li onClick={() => props.setCurrentPage(page)} key={page.name}><a className='pointer'>{page.name}</a></li>;
        })}
    </ul>;
}

export default Menu;