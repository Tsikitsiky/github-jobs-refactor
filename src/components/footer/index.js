import React from 'react'
import { Button, Container, Dote } from './styles/footer'

export default function Footer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Button = function FooterButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Footer.Dote = function FooterDote({children, ...restProps}) {
    return <Dote {...restProps}>{children}</Dote>
}