import React from "react";

import Post from './Post'

import { Container, Titulo, TituloContainer } from './styles'

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TituloContainer>
                    <Titulo>Posts</Titulo>
                </TituloContainer>

                <Post title="Primeiro Post"/>
                <Post title="Segundo Post"/>
                <Post title="Terceiro Post"/>
            </Container>
        )
    }
}
