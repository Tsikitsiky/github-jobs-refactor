import React, { useContext, useState } from 'react'
import Footer from '../components/footer';
import { Context } from '../global-context'

export default function FooterContainer() {
    const {state, dispatch} = useContext(Context);
    const [page, setPage] = useState(1)
    const {searchInput} = state;

    async function getNewPage(e) {
        setPage(e.target.value)
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${searchInput}&page=${e.target.value}`);
        const response = await data.json();
        dispatch({type: "GET_NEW_PAGE", data: response})
        console.log(data);
    }


    return (
        <>
            <Footer>
                <Footer.Button value={page - 1} onClick={getNewPage}>‹</Footer.Button>
                <Footer.Button value={1} onClick={getNewPage}>1</Footer.Button>
                <Footer.Button value={2} onClick={getNewPage}>2</Footer.Button>
                <Footer.Button value={3} onClick={getNewPage}>3</Footer.Button>
                <Footer.Dote>...</Footer.Dote>
                <Footer.Button value={page + 1} onClick={getNewPage}>›</Footer.Button>
            </Footer> 
        </>
    )
}
