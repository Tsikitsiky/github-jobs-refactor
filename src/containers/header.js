import React, { useContext, useState } from 'react'
import { Header } from '../components';
import {Context} from '../global-context'

export default function HeaderContainer() {
    const {dispatch} = useContext(Context);
    const [input, setInput] = useState('');

    async function search(e) {
        e.preventDefault();
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${input}`);
        const response = await data.json();
        dispatch({type: "SEARCH", data: response, input: input})
        setInput('');
    }
    return (
        <Header>
            <Header.Logo>
                Github
                <Header.Tilte> Jobs</Header.Tilte>
            </Header.Logo>
            <Header.Frame>
                <Header.Form onSubmit={search}>
                    <Header.Input placeholder="Title, Companies, expertise or benefits" value={input} onChange={(e) => setInput(e.target.value)} />
                    <Header.Button>Search</Header.Button>
                </Header.Form>
            </Header.Frame>
        </Header>
    )
}
