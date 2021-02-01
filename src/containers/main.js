import React, { useContext, useState } from 'react'
import { Main } from '../components'
import { Context } from '../global-context';
import {differenceInDays} from 'date-fns'

export default function MainContainer() {
    const {state, getFullTimeData, handleCheckboxFilter} = useContext(Context);
    const {jobList, location} = state;
    const [city, setCity] = useState(location);
    const [fullTime, setFullTime] = useState(false);
    const [inputSearch, setInputSearch] = useState('')
    console.log(jobList);

    function Search(e) {
        setInputSearch(e.target.value);
        setCity(e.target.value)
        handleCheckboxFilter(e.target.value)
    }
    
    function check(e) {
        setCity(e.target.value);
        handleCheckboxFilter(e.target.value);
    }

    function getFullTime() {
        setFullTime(!fullTime);
        if(fullTime) {
            getFullTimeData(city);
        }
    }

    const today = new Date(Date.now())
    const oneDay = 24 * 60 * 60 * 1000;
    console.log(today);

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
                        <Main.InputLocationCheck type="checkbox" checked={location === "new york"} value="new york" onChange={check} />
                        New York
                    </Main.Label>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={location === "london"} value="london" onChange={check} />
                        London
                    </Main.Label>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={location === "amsterdam"} value="amsterdam" onChange={check} />
                        Amsterdam
                    </Main.Label>
                    <Main.Label>
                        <Main.InputLocationCheck type="checkbox" checked={location === "berlin"} value="berlin" onChange={check} />
                        Berlin
                    </Main.Label>
                </Main.Group>
            </Main.Pane>
            <Main.Pane>
                <Main.List>
                {jobList ?.map(item => (
                <Main.Item key={item.id} to = {`/description:${item.id}`}>
                    <Main.Logo src={item.company_logo} />
                    <Main.Group>
                        <Main.Company>{item.company}</Main.Company>
                        <Main.JobTitle>{item.title}</Main.JobTitle>
                        <Main.JobTime>{item.type}</Main.JobTime>
                    </Main.Group>
                    <Main.Location>
                        {item.location}
                        <Main.PuplishedOn>{differenceInDays(new Date(), new Date(item.created_at))} days ago</Main.PuplishedOn>
                    </Main.Location>
                </Main.Item>
                ))}
                </Main.List>
            </Main.Pane>
        </Main>
    )
}
