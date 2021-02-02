import React from 'react'
import { Container, Location, Logo, Pane, PublishedOn, Title, Link, Type,  SideTitle, SideText, Company, Text, Group, Group2} from './styles/description.'

export default function Description({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Description.Title = function DescriptionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Description.Pane = function DescriptionPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Description.Type = function DescriptionType({children, ...restProps}) {
    return <Type {...restProps}>{children}</Type>
}

Description.Logo = function DescriptionLogo({...restProps}) {
    return  <Logo {...restProps} />
}

Description.Location = function DescriptionLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}

Description.PublishedOn = function DescriptionPublishedOn({children, ...restProps}) {
    return <PublishedOn {...restProps}>{children}</PublishedOn>
}

Description.Text = function DescriptionText({ ...restProps}) {
    return <Text {...restProps} />
}

Description.Link = function DescriptionLink({children,to, ...restProps}) {
    return <Link {...restProps} to={to} >{children}</Link>
}

Description.SideTitle = function DescriptionSideTitle({children, ...restProps}) {
    return <SideTitle {...restProps}>{children}</SideTitle>
}

Description.SideText = function DescriptionSideText({children, ...restProps}) {
    return <SideText {...restProps}>{children}</SideText>
}

Description.Company = function DescriptionCompany({children, ...restProps}) {
    return <Company {...restProps}>{children}</Company>
}

Description.Group = function DescriptionGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Description.Group2 = function DescriptionGroup({children, ...restProps}) {
    return <Group2 {...restProps}>{children}</Group2>
}