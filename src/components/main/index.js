import React from 'react';
import { Link } from 'react-router-dom';
import { Container, InputText, InputTime, InputLocationCheck, Group, Logo, Item, Label, List, Pane, Location, JobTime, JobTitle, Company, PublishedOn } from './styles/main'

export default function Main({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Main.Pane = function MainPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Main.Group = function MainGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Main.InputTime = function MainInputTime({...restProps}) {
    return <InputTime {...restProps}  />
}

Main.InputText = function MainInputText({...restProps}) {
    return <InputText {...restProps} />
}

Main.InputLocationCheck = function MainInputLocationCheck({...restProps}) {
    return <InputLocationCheck {...restProps} />
}

Main.Label = function MainLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}
Main.List = function MainList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Main.Item = function MainLink({to, children, ...restProps}) {
    return <Link to={to}>
            <Item {...restProps}>{children}</Item>
        </Link>
}

Main.Logo = function MainLogo({...restProps}) {
    return <Logo {...restProps} />
}

Main.Location = function MainLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}

Main.JobTitle = function MainJobTitle({children, ...restProps}) {
    return <JobTitle {...restProps}>{children}</JobTitle>
}

Main.JobTime = function MainJobTime({children, ...restProps}) {
    return <JobTime {...restProps}>{children}</JobTime>
}

Main.Company = function MainCompany({children, ...restProps}) {
    return <Company {...restProps}>{children}</Company>
}

Main.PuplishedOn = function MainPublishedOn({children, ...restProps}) {
    return <PublishedOn {...restProps}>{children}</PublishedOn>
}