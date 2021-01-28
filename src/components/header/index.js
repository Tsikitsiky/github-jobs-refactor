import React from 'react'
import { Button, Container, Form, Frame, Input, Logo, Title } from './styles/header'

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame { ...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({children, ...restProps}) {
    return <Logo { ...restProps}>{children}</Logo>
}

Header.Tilte = function HeaderTilte({children, ...restProps}) {
    return <Title { ...restProps}>{children}</Title>
}
Header.Form = function HeaderForm({children, ...restProps}) {
    return <Form { ...restProps}>{children}</Form>
}
Header.Input = function HeaderInput({ ...restProps}) {
    return <Input { ...restProps} />
}

Header.Button = function HeaderButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}