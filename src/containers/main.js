import React, { useContext, useState } from 'react'
import { Main } from '../components'
import { Item } from '../components/main/styles/main';
import { Context } from '../global-context'

export default function MainContainer() {
    const {state, getFullTimeData, handleCheckboxFilter} = useContext(Context);
    const {jobList, location} = state;
    const [city, setCity] = useState(location);
    const [fullTime, setFullTime] = useState(false);
    const [inputSearch, setInputSearch] = useState('')
    console.log(jobList);

    function Search(e) {
        setInputSearch(e.target.value);
        handleCheckboxFilter(e.target.value)
    }
    
    function check(e) {
        setCity(e.target.value);
        console.log(city)
        handleCheckboxFilter(e.target.value);
    }

    function getFullTime() {
        setFullTime(!fullTime);
        if(fullTime) {
            getFullTimeData(city);
        }
    }

    return (
        <Main>
            <Main.Pane>
                <Main.Label>
                    <Main.InputTime type="checkbox" onChange={getFullTime} />
                    Full time
                </Main.Label>
                <Main.Group>
                    <Main.Label>LOCATION</Main.Label>
                    <Main.InputText type="text" value={inputSearch} placeholder="City, state" onChange={Search}  />
                </Main.Group>
                <Main.Group>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={city === "new york"} value="new york" onChange={check} />
                        New York
                    </Main.Label>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={city === "london"} value="london" onChange={check} />
                        London
                    </Main.Label>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={city === "amsterdam"} value="amsterdam" onChange={check} />
                        Amsterdam
                    </Main.Label>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={city === "berlin"} value="berlin" onChange={check} />
                        Berlin
                    </Main.Label>
                </Main.Group>
            </Main.Pane>
            <Main.Pane>
                <Main.List>
                {jobList.map(item => (
                <Main.Item key={item.id}>
                    <Main.Logo src={item.company_logo} />
                    <Main.Group>
                        <Main.Company>{item.company}</Main.Company>
                        <Main.JobTitle>{item.title}</Main.JobTitle>
                        <Main.JobTime>{item.type}</Main.JobTime>
                    </Main.Group>
                    <Main.Location>{item.location}</Main.Location>
                </Main.Item>
                ))}
                </Main.List>
            </Main.Pane>
        </Main>
    )
}
