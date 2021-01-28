import React from 'react'
import { Header } from '../components'

export default function HeaderContainer() {
    return (
        <Header>
            <Header.Logo>
                Github
                <Header.Tilte> Jobs</Header.Tilte>
            </Header.Logo>
            <Header.Frame>
                <Header.Form>
                    <Header.Input placeholder="Title, Companies, expertise or benefits" />
                    <Header.Button>Search</Header.Button>
                </Header.Form>
            </Header.Frame>
        </Header>
    )
}
