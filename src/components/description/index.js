import React from 'react'
import { Container, Pane, Title } from './styles/description.'

export default function Description({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Description.Title = function DescriptionTitle({children, ...restProps}) {
    <Title {...restProps}>{children}</Title>
}

Description.Pane = function DescriptionPane({children, ...restProps}) {
    <Pane {...restProps}>{children}</Pane>
}

Description.Type = function DescriptionType({children, ...restProps}) {
    <Type {...restProps}>{children}</Type>
}

Description.Title = function DescriptionTitle({children, ...restProps}) {
    <Title {...restProps}>{children}</Title>
}


