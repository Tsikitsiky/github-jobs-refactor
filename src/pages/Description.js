import React from 'react'
import DescriptionContainer from '../containers/description'
import Header from '../components/header';

function Description() {
    return (
        <>
            <Header>
                <Header.Logo>
                    Github
                    <Header.Tilte> Jobs</Header.Tilte>
                </Header.Logo>
            </Header> 
             <DescriptionContainer />
             
        </>
    )
}

export default Description
